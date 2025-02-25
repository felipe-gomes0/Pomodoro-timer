import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { CyclesContext } from "..";
import { useFormContext } from "react-hook-form";
import { useContext } from "react";


export function NewCycleForm() {
    const { activeCycle } = useContext(CyclesContext);
    const { register } = useFormContext();

    return (
        <FormContainer>
                    <label htmlFor="">Vou trabalhar em</label>
                    <TaskInput id="task" placeholder='Dê um nome para o seu projeto.' list="task-suggestions" {...register('task')} disabled={!!activeCycle}/>
                    <datalist id='task-suggestions' >
                        <option value="Projeto 1"></option>
                        <option value="Projeto 2"></option>
                        <option value="Projeto 3"></option>
                        <option value="Projeto 4"></option>
                    </datalist>
                    <label htmlFor="">durante</label>
                    <MinutesAmountInput id="minutosAmount" type="number" placeholder="00" step={5} min={5} max={60} {...register('minutesAmount', { valueAsNumber: true })} disabled={!!activeCycle}/>
                    <span>minutos.</span>
                </FormContainer>

    )
}