import { useRoute } from "@react-navigation/native"
import { SelectChildrenScreenRouteProp } from "../../interfaces/navigation/types";
import { Container, Title } from "./styles"

interface Props {
  name: string
}

export const SelectChildrenScreen = () => {
  const { params } = useRoute<SelectChildrenScreenRouteProp>();

  console.log(params.name);
  

  return (
    <Container>
      <Title>Adicionar criança: {params.name}</Title>
    </Container>
  )
}