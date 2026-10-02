import './design-system.css'
import { UserModule } from './components/UserModule'
import { ThemeSwitcher } from './components/ThemeSwitcher'
 
export const App = () => {
  return (
    <>
    <ThemeSwitcher/>
      <UserModule/>
    </>
   
  )
}