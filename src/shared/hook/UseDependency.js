import { useContext } from "react";
import { DependencyContext } from "../context/DependencyContext";

export function useDeps(){
    return useContext(DependencyContext);
}