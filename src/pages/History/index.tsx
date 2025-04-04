import { useContext } from "react"
import { HistoryContainer , HistoryList, Status } from "./styles.ts"
import { ptBR } from 'date-fns/locale/pt-BR';
import { CyclesContext } from "../../contexts/CyclesContext.tsx"
import { formatDistanceToNow} from 'date-fns';

export function History() {
    const { cycles } = useContext(CyclesContext);

    return (
    <HistoryContainer>
        <h1>Meu histórico</h1>

        <pre>
            {}
        </pre>
        <HistoryList> 
            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Duração</th>
                        <th>Início</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {cycles.map( cycle => {
                        return (
                            <tr key={cycle.id}>
                                <td>{cycle.task}</td>
                                <td>{cycle.minutesAmount} minutos</td>
                                <td>{formatDistanceToNow(new Date(cycle.startDate), {
                                    addSuffix: true,
                                    locale: ptBR,
                                })}</td>
                                <td>
                                    { cycle.finishedDate && (<Status statusColor="concluido" >Concluído</Status>)} 
                                    { cycle.interruptedDate && (<Status statusColor="cancelado">Interrompido</Status>)} 
                                    { (!cycle.finishedDate && !cycle.interruptedDate) && (
                                        <Status statusColor="pendente" >Pendente</Status>) 
                                }  
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </HistoryList>
    </HistoryContainer>
    )


}