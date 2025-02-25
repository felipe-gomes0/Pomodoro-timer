import { HandPalm, Play } from 'phosphor-react';
import {   HomeContainer, StartCountDownButton, StopCountDownButton } from './styles';
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { NewCycleForm } from './NewCycleForm';
import { CountDown } from './CountDown.tsx';
import { CyclesContext } from '../../contexts/CyclesContext.tsx';
import { useContext } from 'react';


    
const newCycleFormValidationSchema = zod.object({
    task: zod   
            .string()
            .min(1, { message: 'Informe a tarefa que você irá realizar.'}),
    minutesAmount: zod
                    .number()
                    .min(5, { message: 'O ciclo mínimo é de 5 minutos.'})
                    .max(60, { message: 'O ciclo máximo é de 60 minutos.'}),
});



export function Home() {

    const { activeCycle, CreateNewCycle, InterruptCurrentCycle } = useContext(CyclesContext);

    const newCycleForm = useForm <NewCycleFormData> ({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        },
    })
    
    type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>; 

    const { handleSubmit, watch, reset } = newCycleForm;

    function handleCreateNewCycle (data: NewCycleFormData) {
        CreateNewCycle(data);
        reset();
    }

    const task = watch('task');
    const isSubmitDisabled = !task;    

    return (
        <HomeContainer>
            <form onSubmit= {handleSubmit(handleCreateNewCycle)} action="">
                    <FormProvider {...newCycleForm}>
                        <NewCycleForm />
                    </FormProvider>
                    <CountDown />
                { activeCycle ? ( 
                    <StopCountDownButton type="button" onClick={InterruptCurrentCycle}> <HandPalm size={24} /> Parar</StopCountDownButton>
                ) : (
                    <StartCountDownButton type="submit" disabled={isSubmitDisabled}> <Play size={24}/> Começar</StartCountDownButton>
                )
            }
                
            </form>
            </HomeContainer>  
    )
}