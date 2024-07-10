import Container from "../../components/common/Container/Container.styled";
import StyledLoginForm from "../../components/LoginForm/LoginForm.styled";

const LoginPage = ({ className: styles }) => {
  return (
    <section className={styles}>
      <Container>
        <StyledLoginForm />
      </Container>
    </section>
  );
};

export default LoginPage;
