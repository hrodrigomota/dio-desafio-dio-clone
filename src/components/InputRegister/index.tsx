import { IconContainer, InputContainer} from './styles'
import { IInputRegister } from './types'

const InputRegister = ({ leftIcon, name }: IInputRegister) => {
    return (
        <>
            <InputContainer>
            
            {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
            {name}
            </InputContainer>
        </>
    )
}

export { InputRegister }