// Importa o React e os userState
// userState serve para criar valores que podem mudar na tela
import React, { useState } from 'react';
// Importa componentes nativos do react native
import {
  View, // caixa / área da tela
  Text, // textos
  TouchableOpacity, // Botão
  StyleSheet, // estilos 
} from 'react-native'; // Botão customizável

// Componente principal APP 
export default function App() {
  // Cria uma estado (variavel php) chamado "pontos"
  // pontos = valor atual
  // setPontos = função para alterar o valor
  // 0 = valor inicial
  const [pontos, setPontos] = useState(0);
  // Função para aumentar 1 ponto 
  function aumentar() {
  // pega o valor auto e soma +1
    setPontos(pontos + 1);
  }
  // Função para diminuir 1 ponto
  function diminuir() {
  // pega o valor atual e subtrai -1
    setPontos(pontos - 1);
  }
  // Função para resetar o contador
  function resetar() {
  // volta o valor para 0
    setPontos(0);
  }
  // Tudo que está no RETURN aparece na tela 
  return (
    // View principal do APP
    <View style={styles.container}>
      {/* Título do APP */}
      <Text style={styles.titulo}>
        🎮 Contador Gamer
      </Text>
    {/* Mostra o valor dos pontos */}
      <Text style={styles.pontos}>
        {pontos}
      </Text>
    {/* Áreas dos bostões +1 e -1 */}
      <View style={styles.areaBotoes}>

        <TouchableOpacity
          style={styles.botao}
          onPress={aumentar}
        >
          <Text style={styles.textoBotao}>
            +1
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={diminuir}
        >
          <Text style={styles.textoBotao}>
            -1
          </Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity
        style={styles.botaoReset}
        onPress={resetar}>
        <Text style={styles.textoBotao}>
          Resetar
        </Text>
      </TouchableOpacity>

    </View>
  );
}

// ÁREA DE ESTILOS DO APP
const styles = StyleSheet.create({
  // ESTILOS DA TELA PRINCIPAL
  container: {
    // OCUPA TODA A TELA
    flex: 1,
    // COR DE FUNDO
    backgroundColor: '#121212',
    // CENTRALIZA HORIZONTALMENTE
    alignItems: 'center',
    // CENTRALIZA VERTICALMENTE
    justifyContent: 'center',
    // ESPAÇAMENTO INTERNO
    padding: 20,
  },

  // ESTILOS DO TÍTULO
  titulo: {
    // TAMANHO DA FONTE
    fontSize: 32,
    // COR DO TEXTO
    color: '#00ff88',
    // TEXTO EM NEGRITO
    fontWeight: 'bold',
    // ESPAÇO ABAIXO
    marginBottom: 30,
  },

  // ESTILOS DOS PONTOS
  pontos: {
    // TAMANHO GIGANTE
    fontSize: 80,
    // COR BRANCA
    color: '#ffffff',
    // ESPAÇO ABAIXO
    marginBottom: 40,
    // NEGRITO
    fontWeight: 'bold',
  },

  // ÁREA DOS BOTÕES
  areaBotoes: {
    // DEIXA UM BOTÃO AO LADO DO OUTRO
    flexDirection: 'row',
    // ESPAÇO ABAIXO
    marginBottom: 20,
  },

  // ESTILOS DOS BOTÕES +1 E -1
  botao: {
    // COR DO BOTÃO
    backgroundColor: '#00ff88',
    // ESPAÇAMENTO VERTICAL
    paddingVertical: 15,
    // ESPAÇAMENTO HORIZONTAL
    paddingHorizontal: 30,
    // BORDAS ARREDONDADAS
    borderRadius: 12,
    // ESPAÇO ENTRE BOTÕES
    marginHorizontal: 10,
  },

  // ESTILO DO BOTÃO RESETAR
  botaoReset: {
    // COR VERMELHA
    backgroundColor: '#ff3b30',
    // ESPAÇAMENTOS
    paddingVertical: 15,
    paddingHorizontal: 40,
    // BORDAS ARREDONDADAS
    borderRadius: 12,
  },
  // ESTILOS DO TEXTO DOS BOTÕES
  textoBotao: {
    // TAMANHO DA LETRA
    fontSize: 22,
    // COR DO TEXTO
    color: '#000',
    // NEGRITO
    fontWeight: 'bold',
  },
});