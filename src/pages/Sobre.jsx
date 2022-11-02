import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Sobre() {
  return (
    <Row className='testRow'>
      <Col  className='testCol'>
        <h1>Sobre Mim</h1>
        <hr />
      </Col>
      <Col  className='testCol'>
        <p>
          Descobri o mundo da programação há cerca de 10 anos. Na época eu trabalhava como programador e controle de produção em uma fábrica de plástico. Passados alguns meses de experiência, vi que só os conhecimentos básicos de Excel já não estavam atendendo às minhas necessidades e às da empresa.
        </p>
        <p>
          Busquei então o aperfeiçoamento com um curso de Excel VBA. Foi nesse momento que me apaixonei pela programação e vi que ali havia um universo de possibilidades. Quando me dei conta, já estava fazendo planilhas com interfaces gráficas para o setor de RH e para a área da qualidade. Vendo o meu empenho e capacidade, meu próprio gerente sugeriu que eu fizesse uma faculdade na área de desenvolvimento de softwares. Era tudo o que eu precisava naquele momento para seguir minha paixão.
        </p>
        <p>
        Hoje sou formado em Análise e Desenvolvimento de Sistemas e, com esse conhecimento agregado às minhas experiências anteriores, desenvolvo soluções para agilizar processos, diminuir erros e aumentar a produtividade.
        </p>
        <p>
        Dentre os meus projeto, desenvolvi um sistema de controle de estoque e fluxo de caixa em C# para um centro de reciclagem.
        </p>    
          
      </Col>
    </Row>  
  );
}

export default Sobre;