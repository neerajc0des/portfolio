"use client"
import React, { useState, useRef, useEffect } from 'react';
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import { Slider } from "@/components/ui/slider"
import { CirclePicker, ColorResult } from 'react-color';
import { Button } from './ui/button';
import { Circle, CircleDot, Eraser, Redo, Trash, Undo } from 'lucide-react';

const predefinedColors = [
    '#FF7F7F', // Vivid Rose (A deeper, more saturated pink-red)
    '#FFBF00', // Amber (Bright, warm orange-yellow)
    '#80D880', // Medium Spring Green (Lively but still soft green)
    '#fff', // Soft White (for highlights or 'erasing' to background)
    '#303030', // Deep Charcoal (Strong, dark neutral for outlines)
    '#64B5F6', // Cerulean Blue (Clear, vibrant blue)
    '#B39DDB', // Amethyst (Rich, muted purple)
];


const SketchPanel = () => {
    const canvasRef = useRef<ReactSketchCanvasRef>(null);
    const sliderBoxRef = useRef<HTMLDivElement>(null);
    const [brushColor, setBrushColor] = useState(predefinedColors[0]);
    const [showBrushSlider, setShowBrushSlider] = useState(false);
    const [brushRadius, setBrushRadius] = useState<number>(5);
    const [isErasing, setIsErasing] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (
            sliderBoxRef.current &&
            !sliderBoxRef.current.contains(event.target as Node)
          ) {
            setShowBrushSlider(false);
          }
        };
    
        if (showBrushSlider) {
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          document.removeEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [showBrushSlider]);


    const handleBrushIconClick = () => {
        setShowBrushSlider(prev => !prev);
    };

    const handleChangeColor = (color: ColorResult) => {
        if (canvasRef.current) {
            canvasRef.current.eraseMode(false);
        }
        setIsErasing(false);
        setBrushColor(color.hex);
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

    return (
        <div className='w-full'>
            <div className='controls w-full flex items-center justify-between pb-1 relative'>
                <CirclePicker
                    colors={predefinedColors}
                    color={brushColor}
                    onChangeComplete={handleChangeColor}
                    width='160px'
                    circleSize={16}
                    circleSpacing={5}
                />
                <div className="flex gap-0 items-center tools justify-end">
                    <Button
                        onClick={handleUndo}
                        className="p-1 w-[30px] h-[25px] hover:bg-primary/0 hover:text-primary/60 cursor-pointer"
                        variant={"ghost"}
                        type="button"
                    >
                        <Undo />
                    </Button>
                    <Button
                        onClick={handleRedo}
                        className="p-1 w-[30px] h-[25px] hover:bg-primary/0 hover:text-primary/60 cursor-pointer"
                        variant={"ghost"}
                        type="button"
                    >
                        <Redo />
                    </Button>

                    <Button
                        onClick={handleClear}
                        className="p-1 w-[30px] h-[25px] hover:bg-primary/0 hover:text-primary/60 cursor-pointer"
                        variant={"ghost"}
                        type="button"
                    >
                        <Trash />
                    </Button>
                    <Button
                        className={`p-1 w-[30px] h-[25px] ${isErasing ? "bg-zinc-200" : "bg-primary/0"} hover:bg-zinc-200/90 transition-all duration-200 hover:text-primary/60 cursor-pointer`}
                        variant={"ghost"}
                        type="button"
                        onClick={handleEraserClick}
                    >
                        <Eraser />
                        {isErasing && <span className="absolute top-[35px] bg-zinc-50 rounded-sm shadow-sm p-1 text-primary left-2 text-xs">Eraser active</span>}
                    </Button>

                    <Button
                        className={`p-1 w-[30px] h-[25px] hover:bg-primary/0 bg-primary/0 hover:text-primary/60 cursor-pointer`}
                        variant={"ghost"}
                        type="button"
                        onClick={handleBrushIconClick}
                    >
                        <CircleDot />
                    </Button>
                </div>
                <div ref={sliderBoxRef} className={`sliderContainer ${showBrushSlider ? "block" : "hidden"} absolute top-[30px] border-zinc-300 border rounded-sm right-0 w-[150px] h-[120px] p-5 bg-zinc-100 flex flex-col justify-between items-center`}>
                    <Slider
                        value={[brushRadius]}
                        onValueChange={([val]) => setBrushRadius(val)}
                        className='cursor-pointer' defaultValue={[5]} min={5} max={20} step={1}
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
                    canvasColor={"#d9d9d9"}
                    // width={'300px'}
                    height={"300px"}
                    style={{ border: '0px transparent' }}
                />
            </div>
        </div>
    )
}

export default SketchPanel