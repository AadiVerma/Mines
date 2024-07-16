import { GameManger } from "./gamelogic";
const gameManager = new GameManger();
export function Start(playerId:string,count:number) {
    try {
        gameManager.CreateGame(playerId, count);
        return true;
    } catch (error) {
        console.error("Error starting game:", error);
        return false;
    }
}
export function Stop(playerId:string){
    try {
        gameManager.endGame(playerId);
        return true;
    } catch (error) {
        console.error("Error stopping game:", error);
        return false;
    }
}
export function TryLuck(playerId:string,count:number):boolean{
    try{
       const ans=gameManager.checkNumber(playerId,count);
       if(ans){
        return true;
       }
       return false;
    }catch(error){
        console.error("Error Try game:", error);
        return false;
    }
}
export function GetGame(playerid:string){
    try{
       const get=gameManager.getGame(playerid);
       gameManager.endGame(playerid);
       return get;
    }catch(error){
        console.error("Error Try game:", error);
        return false;
    }
}