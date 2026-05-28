//Importação para o menu lateral funcionar
import 'react-native-gesture-handler';

//Importar o container de navegação
// Ele controla todas as telas do app
import { NavigationContainer } from '@react-navigation/native';

//Importar o menu lateral (DRAWER)
import { createDrawerNavigator } from '@react-navigation/drawer';

//Importar as telas
import Jogador1 from './components/Jogador1';
import Jogador2 from './components/Jogador2';
import Jogador3 from './components/Jogador3';
import Atividade from './components/Atividade';

//Cria o Drawer
const Drawer = createDrawerNavigator();

//Componente principal do APP
export default function APP() {
  // O que está dentro do return aparece na tela
  return (
    // Container Principal da navegação
    <NavigationContainer>
      {/* menu lateral */}
      <Drawer.Navigator>
        {/* Tela do Jogador 1 */}
        <Drawer.Screen
          // nome que aparece no menu
          name="1 Jogador"
          //componente que será aberto
          component={Jogador1}

        />
        <Drawer.Screen
          // nome que aparece no menu
          name="2 Jogadores"
          //componente que será aberto
          component={Jogador2}

        />

        <Drawer.Screen
          // nome que aparece no menu
          name="3 Jogadores"
          //componente que será aberto
          component={Jogador3}

        />
           <Drawer.Screen
          // nome que aparece no menu
          name="Atividade"
          //componente que será aberto
          component={Atividade}

        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}