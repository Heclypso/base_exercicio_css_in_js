import styled from 'styled-components'
import { Cores } from '../..'

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${Cores.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`

export const BarraDePesquisa = styled.input`
  padding: 0 16px;
  outline-color: ${Cores.corPrincipal};
  width: 100%;
`

export const BotaoPesquisar = styled.button`
  background-color: ${Cores.corPrincipal};
  border: 1px solid ${Cores.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${Cores.corSecundaria};
  margin-left: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`
