"use client"

import { GetGame, Start } from "./backend/playgame";
import SquareTile from "./components/SquareTile";
import { useEffect, useState } from "react";
import { Input } from "./components/input";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [cover, setCover] = useState(false);
  const [bombs, setBombs] = useState<Set<number>>();
  const [count, setCount] = useState<number>(0);
  const [start, setStart] = useState(false);
  const [data, setData] = useState(1);

  const DiamondFound = () => {
    const audio = new Audio("/assets/diamond-found.mp3");
    audio.play().catch(error => console.error("Error playing audio:", error));
    setTimeout(() => {
      audio.pause();
    }, 2500);
  };
  const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  const BombFound = () => {
    const audio = new Audio("/assets/bomb-found.mp3");
    audio.play().catch(error => console.error("Error playing audio:", error));
    setTimeout(() => {
      audio.pause();
    }, 2500);
  }
  useEffect(() => {
    if (start) {
      Start("6d798a8f-05e8-4448-9831-cec1411f30b2", data);
    }
  }, [start, data]);

  useEffect(() => {
    if (cover || count === 25 - data) {
      const game = GetGame("6d798a8f-05e8-4448-9831-cec1411f30b2");
      if (game !== false) {
        setBombs(game);
      }
    }
  }, [cover, count]);

  return (
    <div className="bg-black min-h-[100vh] text-white flex justify-center place-items-center">
      <div><Toaster
        position="top-center"
        reverseOrder={false}
      /></div>
      <Input setData={setData} setStart={setStart} start={start} />
      <div className={`${cover ? "pointer-events-none" : "pointer-events-auto"} grid grid-cols-5 gap-2  border-2 p-2 rounded-lg border-[#121212] z-40`}>
        {tiles.map((id) => (
          <SquareTile
            key={id}
            id={id}
            DiamondFound={DiamondFound}
            BombFound={BombFound}
            setCover={setCover}
            addIcon={bombs?.has(id - 1) ? "GiFireBomb" : "FaGem"}
            cover={cover}
            setcount={setCount}
            count={count}
            data={data}
          />
        ))}
      </div>
    </div>
  );
}
