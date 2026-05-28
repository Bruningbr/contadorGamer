// Importa o react e o useState
// useState serve para criar valores que podem mudar na tela
import React, { useState } from "react";
// Importa os componentes nativos do react native
import {
  View, //caixa / area da tela
  Text, // textos
  Button, // botões
  StyleSheet, // estilos
  TouchableOpacity, // botões customizados
  TextInput
} from "react-native-web";
 

// Componente principal APP
export default function Jogador2() {
  // Criando o estado(variavel) pontos, que começa com o valor 0
  // pontos é a variável que guarda o valor atual dos pontos
  // setPontos é a função que atualiza o valor de pontos
  // useState(0) significa que o valor inicial de pontos é 0
  const [pontos, setPontos] = useState(0);

  // Função para aumentar os pontos em 1
  // aumentar() é chamada quando o usuário clicar no botão de aumentar
  // Essa função é responsável por incrementar o contador em 1, ou seja, aumentar os pontos
  function aumentar() {
    // setPontos(pontos + 1) atualiza o valor de pontos para pontos + 1
    // Isso é usado para aumentar o contador em 1
    // Quando o usuário clicar no botão de aumentar, os pontos serão incrementados em 1
    setPontos(pontos + 1);
  }
  // Função para diminuir os pontos em 1
  // diminuir() é chamada quando o usuário clicar no botão de diminuir
  // Essa função é responsável por reduzir o contador em 1, ou seja, diminuir os pontos
  function diminuir() {
    // setPontos(pontos - 1) atualiza o valor de pontos para pontos - 1
    // Isso é usado para diminuir o contador em 1
    // Quando o usuário clicar no botão de diminuir, os pontos serão reduzidos em 1 
    if (pontos == 0) {
      setPontos(pontos);
    } else {
      setPontos(pontos - 1);
    }

  }
  function resetar() {
    // setPontos(0) atualiza o valor de pontos para 0
    // Isso é usado para zerar o contador
    // Quando o usuário clicar no botão de resetar, os pontos voltarão para 0
    setPontos(0);
  }
  const [pontos2, setPontos2] = useState(0);

  // Função para aumentar os pontos em 1
  // aumentar() é chamada quando o usuário clicar no botão de aumentar
  // Essa função é responsável por incrementar o contador em 1, ou seja, aumentar os pontos
  function aumentar2() {
    // setPontos(pontos + 1) atualiza o valor de pontos para pontos + 1
    // Isso é usado para aumentar o contador em 1
    // Quando o usuário clicar no botão de aumentar, os pontos serão incrementados em 1
    setPontos2(pontos2 + 1);
  }
  // Função para diminuir os pontos em 1
  // diminuir() é chamada quando o usuário clicar no botão de diminuir
  // Essa função é responsável por reduzir o contador em 1, ou seja, diminuir os pontos
  function diminuir2() {
    // setPontos(pontos - 1) atualiza o valor de pontos para pontos - 1
    // Isso é usado para diminuir o contador em 1
    // Quando o usuário clicar no botão de diminuir, os pontos serão reduzidos em 1 
    if (pontos2 == 0) {
      setPontos2(pontos2);
    } else {
      setPontos2(pontos2 - 1);
    }
  }
  // Função para resetar os pontos para 0
  // resetar() é chamada quando o usuário clicar no botão de resetar
  // Essa função é responsável por zerar o contador, ou seja, colocar os pontos de volta para 0
  function resetar2() {
    // setPontos(0) atualiza o valor de pontos para 0
    // Isso é usado para zerar o contador
    // Quando o usuário clicar no botão de resetar, os pontos voltarão para 0
    setPontos2(0);
  }

  function ganhador() {
    if (pontos > pontos2) {
      <Text style={styles.titulo}>
        Jogador 1 está ganhando!
      </Text>
    } else if (pontos == pontos2) {
      <Text style={styles.titulo}>
        Ambos estão empatados
      </Text>
    } else {
      <Text style={styles.titulo}>
        Jogador 2 está ganhando!
      </Text>
    }
  }




const [text, setText] = useState('');

const [text2, setText2] = useState('');
  // O que será exibido na tela do aplicativo
  return (
    // View é a caixa principal que envolve todo o conteúdo da tela
    <View style={styles.container}>
      {/* Text é usado para exibir textos na tela */}
      <Text style={styles.titulo}>
        🤔 Tabela de pontos 
        
      </Text>
       
    <Text style={styles.jog}>
        Jogador 1 vs Jogador 2

      </Text>


      
      
      

      
      


      <View style={styles.const}>
        <View style={styles.j1}>
            <TextInput
        placeholder="Digite o nome!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
          borderRadius: 20,
        }}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text}
      </Text>
          {/* mostra o valor atual dos pontos na tela, usando a variável pontos
       O estilo styles.pontos é aplicado para deixar o número grande e visível
       Sempre que a variável pontos for atualizada, o valor exibido na tela também será atualizado automaticamente */}
          <Text style={styles.pontos}>
            {pontos}
          </Text>
          {/* areaBotoes é uma View que organiza os botões de aumentar e diminuir em linha */}
          <View style={styles.areaBotoes}>
            <TouchableOpacity style={styles.botao} onPress={aumentar}>
              <Text style={styles.textoBotao}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={diminuir}>
              <Text style={styles.textoBotao}>-1</Text>
            </TouchableOpacity>
          </View>
          {/* botaoReset é um botão separado para resetar os pontos, com um estilo diferente para destacar sua função
       O onPress do TouchableOpacity chama a função resetar, que zera os pontos quando o usuário clicar nesse botão
       O texto "Resetar" é exibido dentro do botão para indicar sua função */}
          <TouchableOpacity style={styles.botaoReset} onPress={resetar}>
            <Text style={styles.textoBotao}>Resetar</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.j2}>
            <TextInput
        placeholder="Digite o nome!"
        onChangeText={newText2 => setText2(newText2)}
        defaultValue={text2}
        style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
          borderRadius: 20,
        }}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text2}
      </Text>
          {/* mostra o valor atual dos pontos na tela, usando a variável pontos
       O estilo styles.pontos é aplicado para deixar o número grande e visível
       Sempre que a variável pontos for atualizada, o valor exibido na tela também será atualizado automaticamente */}
          <Text style={styles.pontos}>
            {pontos2}
          </Text>
          {/* areaBotoes é uma View que organiza os botões de aumentar e diminuir em linha */}
          <View style={styles.areaBotoes}>
            <TouchableOpacity style={styles.botao} onPress={aumentar2}>
              <Text style={styles.textoBotao}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={diminuir2}>
              <Text style={styles.textoBotao}>-1</Text>
            </TouchableOpacity>
          </View>
          {/* botaoReset é um botão separado para resetar os pontos, com um estilo diferente para destacar sua função
       O onPress do TouchableOpacity chama a função resetar, que zera os pontos quando o usuário clicar nesse botão
       O texto "Resetar" é exibido dentro do botão para indicar sua função */}
          <TouchableOpacity style={styles.botaoReset} onPress={resetar2}>
            <Text style={styles.textoBotao}>Resetar</Text>
          </TouchableOpacity>
        </View>







      </View>
    </View>


  );
}


// Estilos para os componentes da tela, usando StyleSheet do React Native
const styles = StyleSheet.create({
  // container é o estilo para a View principal que envolve todo o conteúdo da tela
  container: {
    display: 'flex',
    // flex: 1 significa que a View vai ocupar toda a tela disponível
    flex: 1,
    // backgroundColor define a cor de fundo da tela
    backgroundColor: '#54c3ffff',
    // alignItems: 'center' centraliza os itens horizontalmente
    alignItems: 'center',
    // justifyContent: 'center' centraliza os itens verticalmente
    justifyContent: 'center',
    // padding adiciona um espaço interno ao redor do conteúdo da View
    padding: 20,
  },
  // titulo é o estilo para o texto do título do aplicativo
  titulo: {
    // fontSize define o tamanho da fonte do texto
    fontSize: 32,
    // color define a cor do texto
    color: '#d16a03ff',
    // fontWeight: 'bold' deixa o texto em negrito
    fontWeight: 'bold',
    // marginBottom adiciona um espaço abaixo do título para separar do restante do conteúdo
    marginBottom: 30,
  },
  // pontos é o estilo para o texto que exibe o valor atual dos pontos
  pontos: {
    // fontSize define o tamanho da fonte do número de pontos, deixando-o grande e visível
    fontSize: 80,
    // color define a cor do texto dos pontos
    color: '#f014deff',
    // marginBottom adiciona um espaço abaixo do número de pontos para separar dos botões
    marginBottom: 40,
    // fontWeight: 'bold' deixa o número de pontos em negrito
    fontWeight: 'bold',
  },
  // areaBotoes é o estilo para a View que organiza os botões de aumentar e diminuir
  areaBotoes: {
    // flexDirection: 'row' organiza os botões em linha, ou seja, um ao lado do outro
    flexDirection: 'row',
    // marginBottom adiciona um espaço abaixo da área dos botões para separar do botão de resetar
    marginBottom: 20,
  },
  // botao é o estilo para os botões de aumentar e diminuir
  botao: {
    // backgroundColor define a cor de fundo dos botões de aumentar e diminuir
    backgroundColor: '#ff00c3ff',
    // paddingVertical define o espaço interno vertical dos botões, aumentando a área clicável
    paddingVertical: 15,
    // paddingHorizontal define o espaço interno horizontal dos botões, aumentando a área clicável
    paddingHorizontal: 30,
    // borderRadius define o raio das bordas dos botões, deixando-os arredondados
    borderRadius: 20,
    // marginHorizontal adiciona um espaço horizontal entre os botões de aumentar e diminuir
    marginHorizontal: 10,
  },
  // botaoReset é o estilo para o botão de resetar, com uma cor diferente para destacar sua função
  botaoReset: {
    // backgroundColor define a cor de fundo do botão de resetar, usando um vermelho para indicar que é uma ação de reiniciar
    backgroundColor: '#ff3b30',
    // paddingVertical define o espaço interno vertical do botão de resetar, aumentando a área clicável
    paddingVertical: 15,
    // paddingHorizontal define o espaço interno horizontal do botão de resetar, aumentando a área clicável
    paddingHorizontal: 40,
    // borderRadius define o raio das bordas do botão de resetar, deixando-o arredondado
    borderRadius: 20,
  },
  // textoBotao é o estilo para o texto dentro dos botões, usado tanto para os botões de aumentar/diminuir quanto para o botão de resetar
  textoBotao: {
    // define o tamanho da fonte do texto dos botões, deixando-o grande o suficiente para ser legível
    fontSize: 18,
    // color define a cor do texto dos botões, usando preto para contraste com as cores de fundo dos botões
    color: '#22ded7ff',
    // negrito para destacar o texto dos botões, tornando-os mais visíveis e fáceis de ler
    fontWeight: 'bold',
  },
  jog: {
    // fontSize define o tamanho da fonte do texto
    fontSize: 32,
    // color define a cor do texto
    color: '#b700ffff',
    // fontWeight: 'bold' deixa o texto em negrito
    fontWeight: 'bold',
    // marginBottom adiciona um espaço abaixo do título para separar do restante do conteúdo
    marginBottom: 30,
  },
  const: {
    flexDirection: 'row',
  },
  j1: {
    marginRight: 100,
    alignItems: 'center',
  },
  j2: {
    alignItems: 'center',
  },

});
