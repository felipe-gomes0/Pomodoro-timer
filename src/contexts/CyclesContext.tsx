import { createContext, ReactNode, useState, useReducer } from "react";
import {  Cycle, cyclesReducer } from '../reducers/cycles/reducer';
import {  addNewCycleAction, interruptCurrentCycleAction } from '../reducers/cycles/actions';

interface CreateCycleData {
    task: string;
    minutesAmount: number;
}

interface CyclesContextData {
    cycles: Cycle[];
    activeCycle: Cycle | undefined; 
    activeCycleId: string | null; 
    amountSecondsPassed: number;
    markCurrentCycleAsFinished : () => void;
    setSecondsPassed: (seconds: number) => void;
    CreateNewCycle:  (data: CreateCycleData) => void;
    InterruptCurrentCycle: () => void;
}   



export const CyclesContext = createContext({} as CyclesContextData);

interface CyclesContextProviderProps {
    children: ReactNode;
}

export function CyclesContextProvider( { children }: CyclesContextProviderProps) {
    const [ cyclesState, dispatch ] = useReducer(cyclesReducer, {
        cycles: [],
        activeCycleId: null

    }
);

    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

    const { cycles, activeCycleId } = cyclesState;


    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds);
    }
    
    function markCurrentCycleAsFinished() {
        dispatch(markCurrentCycleAsFinished());

    }

    function CreateNewCycle (data: CreateCycleData) {
        const id = String(new Date().getTime());
     
        const newCycle: Cycle = {
            id ,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }   
        
        dispatch(addNewCycleAction(newCycle));

        setAmountSecondsPassed(0);
    }
    
    function InterruptCurrentCycle() {
        dispatch(interruptCurrentCycleAction());
  
    
    }

    return (
        <CyclesContext.Provider 
            value ={{ 
                cycles,
                activeCycle, 
                activeCycleId, 
                amountSecondsPassed, 
                markCurrentCycleAsFinished, 
                setSecondsPassed,
                CreateNewCycle,
                InterruptCurrentCycle
            }}
        >
            {children}
        </CyclesContext.Provider>
    )
}