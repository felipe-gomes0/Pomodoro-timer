import { useContext } from "react"
import { HistoryContainer , HistoryList, Status } from "./styles.ts"
import { CyclesContext } from "../../contexts/CyclesContext.tsx"

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
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td>
                        <td><Status statusColor='pendente'>Concluído</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td>
                        <td><Status statusColor='cancelado'>Concluído</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td>
                        <td><Status statusColor="concluido">Concluído</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td>
                        <td><Status statusColor='pendente'>Concluído</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td>
                        <td><Status statusColor='cancelado'>Concluído</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td>
                        <td><Status statusColor='concluido'>Concluído</Status></td>
                    </tr>
                    <tr>
                        <td>Tarefa</td>
                        <td>20 minutos</td>
                        <td>Há 2 meses</td>
                        <td><Status statusColor='concluido'>Concluído</Status></td>
                    </tr>
                </tbody>
            </table>
        </HistoryList>
    </HistoryContainer>
    )


}