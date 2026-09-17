import {FirstComponent} from './FirstComponent.tsx'
import {SecondComponent} from './SecondComponent.tsx'
 
interface MainViewProps {
    cualMaestro: number
}
 
 
export const MainComponent = ({cualMaestro }: MainViewProps) => {
  return (
    <div>
        {
            cualMaestro == 1 ? (
                <FirstComponent name="Karely" lastName="Hernandez" age={20} />
            ) : (
                <SecondComponent />
            )
        }
    </div>
  )
}
 
