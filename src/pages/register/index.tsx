import { MdEmail, MdLock } from "react-icons/md";
import { RiUser3Fill } from "react-icons/ri";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { InputRegister } from "../../components/InputRegister";
import {
  Container,
  Column,
  Title,
  Wrapper,
  TitleLogin,
  SubtitleLogin,
  Row,
  SignInText,
} from "./styles";

const Register = () => {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form>
              <InputRegister
                name="Nome completo"
                leftIcon={<RiUser3Fill />}
              />
              <InputRegister
                name="E-mail"
                leftIcon={<MdEmail />}
              />
              <InputRegister
                name="Password"
                leftIcon={<MdLock />}
              />

              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Row>
              <p>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </p>
            </Row>
            <Row>

              <SignInText>Já tenho conta. <span>Fazer login</span></SignInText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Register };
