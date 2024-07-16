"use client"
import { useState } from "react"
import { GiMoneyStack } from "react-icons/gi";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./selectmenu"
import { Stop } from "../backend/playgame";

interface InputProps {
    setData: (value: number) => void;
    setStart: (value: boolean) => void;
    start:boolean
}

export function Input({ setData, setStart ,start}: InputProps) {
    const [change, setChange] = useState(false);
    const handleButtonClick = () => {
       if(start){
        Stop("6d798a8f-05e8-4448-9831-cec1411f30b2");
        setStart(false);
        window.location.reload();
       }
        else{
        setStart(true);
        }
        setChange(!change);
    };

    return (
        <div className="border-2 rounded-lg border-[#121212] p-5 mb-40 mr-52 w-84">
            <h1 className="text-lg font-semibold mb-4">Place your bet and try your luck !!</h1>
            <Select onValueChange={(value) => setData(Number(value))}>
                <SelectTrigger className="w-[160px] border-[#212121] mb-4 ml-14">
                    <SelectValue placeholder="Mines" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="7">7</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="9">9</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="11">11</SelectItem>
                    <SelectItem value="12">12</SelectItem>
                    <SelectItem value="13">13</SelectItem>
                    <SelectItem value="14">14</SelectItem>
                    <SelectItem value="15">15</SelectItem>
                    <SelectItem value="16">16</SelectItem>
                    <SelectItem value="17">17</SelectItem>
                    <SelectItem value="18">18</SelectItem>
                    <SelectItem value="19">19</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="21">21</SelectItem>
                    <SelectItem value="22">22</SelectItem>
                    <SelectItem value="23">23</SelectItem>
                    <SelectItem value="24">24</SelectItem>
                </SelectContent>
            </Select>
            <button
                className="bg-green-500 hover:bg-green-700 rounded-lg pl-10 pr-10 p-3 w-full flex justify-center gap-4 text-lg text-black font-semibold"
                onClick={handleButtonClick}
            >
                {change ? "End Game" : "Bet"} <GiMoneyStack className="text-2xl text-black" />
            </button>
        </div>
    )
}
