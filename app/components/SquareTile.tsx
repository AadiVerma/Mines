"use client"
import { FaGem } from "react-icons/fa";
import { GiFireBomb } from "react-icons/gi";
import { TryLuck } from "../backend/playgame";
import { useState } from "react";
import toast from "react-hot-toast";

interface SquareTileProps {
  id: number;
  DiamondFound: () => void;
  BombFound: () => void;
  setCover: any;
  addIcon: string;
  cover: boolean;
  setcount: (value: (prevCount: number) => number) => void;
  count: number;
  data:number
}

export default function SquareTile({ id, DiamondFound, BombFound, setCover, addIcon, cover, setcount, count ,data}: SquareTileProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [Icon, setIcon] = useState<string>("FaGem");

  const handleClick = () => {
    if (isClicked || cover) return;
    setcount(prevCount => prevCount + 1);
    setIsClicked(true);
    const get = TryLuck("6d798a8f-05e8-4448-9831-cec1411f30b2", id - 1);
    if (get) {
      setIcon("GiFireBomb");
      BombFound();
      toast.error("Hard Luck !!")
      setCover(true);
    } else if (count === 25-data-1) {
      setCover(true);
      toast.success('Someone Looks lucky today.')
    } else {
      DiamondFound();
    }
  };

  return (
    <div
      className={`rounded-lg h-28 w-28 flex justify-center items-center ${!isClicked ? "cursor-pointer bg-[#0e0e0e]" : "cursor-default bg-black"} border-2 border-[#121212]`}
      onClick={handleClick}
    >
      <div className={`${isClicked ? "block bg-black" : "hidden bg-gray-500"} rounded-lg h-24 w-24 flex justify-center items-center cursor-default`}>
        {Icon !== "GiFireBomb" ? <FaGem className="text-7xl text-green-600 drop-shadow-green" /> : <GiFireBomb className="text-7xl text-red-700 drop-shadow-red" />}
      </div>
      <div className={`${(!isClicked && cover) ? "block bg-black" : "hidden bg-gray-500"} rounded-lg h-24 w-24 flex justify-center items-center cursor-default`}>
        {addIcon !== "GiFireBomb" ? <FaGem className="text-7xl text-green-600 drop-shadow-green" /> : <GiFireBomb className="text-7xl text-red-700 drop-shadow-red" />}
      </div>
    </div>
  );
}
