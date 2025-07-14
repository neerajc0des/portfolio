"use client"
import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import { Slider } from "@/components/ui/slider"
import { CirclePicker, ColorResult, SketchPicker } from 'react-color';
import { Button } from './ui/button';
import { Circle, CircleDot, Eraser, Redo, Trash, Undo } from 'lucide-react';

const predefinedColors = [
    '#FF7F7F', // Vivid Rose (A deeper, more saturated pink-red)
    '#FFBF00', // Amber (Bright, warm orange-yellow)
    '#80D880', // Medium Spring Green (Lively but still soft green)
    '#fafafa', // Soft White (for highlights or 'erasing' to background)
    '#303030', // Deep Charcoal (Strong, dark neutral for outlines)
    '#F1C27D', // face
    '#64B5F6', // Cerulean Blue (Clear, vibrant blue)
    '#FFB7C5',
    '#B39DDB', // Amethyst (Rich, muted purple)
    '#795548', // Brown (Earth tone)
    'rgba(255, 255, 255, 0.5)', //semilight white
    'rgba(255, 0, 0, 0.5)', //tranaslucent red
    'rgba(0, 128, 0, 0.5)', // translucent green
    'rgba(0, 0, 0, 0.5)', // translucent black

];

export interface SketchPanelHandle {
    exportDrawing: () => Promise<string>;
}

interface SketchPanelProps {
    onImgExport: (imageData: string) => void;
}

const SketchPanel = forwardRef<SketchPanelHandle>((_props, ref) => {
    const canvasRef = useRef<ReactSketchCanvasRef>(null);
    const sliderBoxRef = useRef<HTMLDivElement>(null);
    const customColorPickerRef = useRef<HTMLDivElement>(null);
    const customColorIconRef = useRef<HTMLDivElement>(null);
    const brushIconRef = useRef<HTMLButtonElement>(null);
    const [brushColor, setBrushColor] = useState(predefinedColors[0]);
    const [showBrushSlider, setShowBrushSlider] = useState(false);
    const [brushRadius, setBrushRadius] = useState<number>(2);
    const [isErasing, setIsErasing] = useState(false);
    const [showColorPicker, setShowColorPicker] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                sliderBoxRef.current &&
                !sliderBoxRef.current.contains(event.target as Node) &&
                brushIconRef.current && 
                !brushIconRef.current.contains(event.target as Node)
            ) {
                setShowBrushSlider(false);
            }

            if (
                showColorPicker && 
                customColorPickerRef.current &&
                !customColorPickerRef.current.contains(event.target as Node) &&
                customColorIconRef.current &&
                !customColorIconRef.current.contains(event.target as Node)

            ) {
                setShowColorPicker(false);
            }
        };

        if (showBrushSlider || showColorPicker) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showBrushSlider, showColorPicker]);


    const handleBrushIconClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowBrushSlider(prev => !prev);
    };

    const handleChangeColor = (color: ColorResult) => {
        if (canvasRef.current) {
            canvasRef.current.eraseMode(false);
        }
        setIsErasing(false);

        setShowColorPicker(false)

        let newBrushColor;
        if (color.rgb.a !== undefined && color.rgb.a < 1) {
            newBrushColor = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
        } else {
            newBrushColor = color.hex;
        }

        setBrushColor(newBrushColor);
    };

    const handleChangeCustomColor = (color: ColorResult) => {
        if (canvasRef.current) {
            canvasRef.current.eraseMode(false);
        }
        setIsErasing(false);

        let newBrushColor;
        if (color.rgb.a !== undefined && color.rgb.a < 1) {
            newBrushColor = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
        } else {
            newBrushColor = color.hex;
        }

        setBrushColor(newBrushColor);
    };

    const handleUndo = () => {
        if (canvasRef.current) {
            canvasRef.current.undo();
        }
    };

    const handleRedo = () => {
        canvasRef.current?.redo();
    };

    const handleClear = () => {
        if (canvasRef.current) {
            canvasRef.current.clearCanvas();
        }
    };

    const handleEraserClick = () => {
        const newIsErasing = !isErasing;
        setIsErasing(newIsErasing);
        if (canvasRef.current) {
            canvasRef.current.eraseMode(newIsErasing);
        }
        if (showBrushSlider) {
            setShowBrushSlider(false);
        }
    };

    useImperativeHandle(ref, () => ({
        exportDrawing: async () => {
            if (canvasRef.current) {
                const imageData = await canvasRef.current.exportImage('png');
                return imageData;
            }
            throw new Error("Canvas not ready");
        }
    }));

    return (
        <div className='w-full'>
            <div className='controls w-full flex items-center justify-between pb-1 relative'>
                <div className="colorPickerContainer relative w-[150px] overflow-x-auto py-2 pl-6 whitespace-nowrap no-scrollbar">
                    <div onClick={() => setShowColorPicker((prev)=>!prev)} ref={customColorIconRef} className="w-[16px] h-[16px] hue-wheel-gradient border-zinc-400 border absolute top-[8px] left-[2px] cursor-pointer hover:scale-110"></div>

                    <CirclePicker
                        colors={predefinedColors}
                        color={brushColor}
                        onChangeComplete={handleChangeColor}
                        width='370px'
                        circleSize={16}
                        circleSpacing={10}
                    />
                </div>
                {showColorPicker &&
                    <div className="sketchPickerWrapper absolute top-[10px] left-[10px]" ref={customColorPickerRef}>
                        <SketchPicker
                            color={brushColor}
                            onChangeComplete={handleChangeCustomColor}
                            width='200px'
                            className='absolute top-[45px] left-[10px]'
                        />
                    </div>
                }
                <div className="separator w-px h-[15px] bg-zinc-400/80 mx-2 rounded-sm"></div>
                <div className="flex gap-0 items-center tools justify-end">
                    <Button
                        onClick={handleUndo}
                        className=" hover:bg-zinc-200/90 rounded-[5px] p-1 w-[30px] h-[28px]  hover:text-primary/60 cursor-pointer"
                        variant={"ghost"}
                        type="button"
                    >
                        <Undo />
                    </Button>
                    <Button
                        onClick={handleRedo}
                        className=" hover:bg-zinc-200/90 rounded-[5px] p-1 w-[30px] h-[28px]  hover:text-primary/60 cursor-pointer"
                        variant={"ghost"}
                        type="button"
                    >
                        <Redo />
                    </Button>

                    <Button
                        onClick={handleClear}
                        className=" hover:bg-zinc-200/90 rounded-[5px] p-1 w-[30px] h-[28px] hover:text-primary/60 cursor-pointer"
                        variant={"ghost"}
                        type="button"
                    >
                        <Trash />
                    </Button>
                    <Button
                        className={` hover:bg-zinc-200/90 rounded-[5px] p-1 w-[30px] h-[28px] ${isErasing ? "bg-zinc-200" : "bg-primary/0"} hover:bg-zinc-200/90 transition-all duration-200 hover:text-primary/60 cursor-pointer`}
                        variant={"ghost"}
                        type="button"
                        onClick={handleEraserClick}
                    >
                        <Eraser />
                        {isErasing && <span className="absolute top-[45px] bg-zinc-50 rounded-sm shadow-sm py-1 px-2 text-primary left-2 text-xs">Eraser active</span>}
                    </Button>

                    <Button
                        className={` hover:bg-zinc-200/90 rounded-[5px] p-1 w-[30px] h-[28px]  bg-primary/0 hover:text-primary/60 cursor-pointer`}
                        variant={"ghost"}
                        type="button"
                        ref={brushIconRef}
                        onClick={handleBrushIconClick}
                    >
                        <CircleDot />
                    </Button>
                </div>
                <div ref={sliderBoxRef} className={`sliderContainer ${showBrushSlider ? "block" : "hidden"} absolute top-[40px] border-zinc-300 border rounded-sm right-[5px] w-[150px] h-[120px] p-5 bg-zinc-100 flex flex-col justify-between items-center`}>
                    <Slider
                        value={[brushRadius]}
                        onValueChange={([val]) => setBrushRadius(val)}
                        className='cursor-pointer' defaultValue={[5]} min={2} max={30} step={1}
                    />
                    <Circle size={brushRadius} />
                    <span className="text-gray-700 text-xs font-medium">{brushRadius}px</span>
                </div>
            </div>
            <div className="canvasContainer w-[300px] overflow-hidden w-full rounded-sm">
                <ReactSketchCanvas
                    ref={canvasRef}
                    strokeColor={brushColor}
                    strokeWidth={brushRadius}
                    eraserWidth={brushRadius}
                    canvasColor={"#cacaca"}
                    // width={'300px'}
                    height={"300px"}
                    style={{ border: '0px transparent' }}
                />
            </div>
        </div>
    )
})

export default SketchPanel;