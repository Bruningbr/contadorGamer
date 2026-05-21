// Importação para o menu lateral funcionar
import 'react-native-gesture-handler';

// Imporar o container da navegação
// ele controla todas as telas do app
import { NavigationContainer } from '@react-navigation/native';

// Importa o menu lateral (DREWER)
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importa as telas
import Jogador1 from './components/Jogador1';

// Criar o Drawer
const Drawer = createDrawerNavigator();

// Componente principal APP
export default function App() {
  // o que esta dentro do return aparece na tela
  return (
    // Container Principal da navegação
    <NavigationContainer>
      {/* menu lateral */}
      <Drawer.Navigator>
        {/* Tela do jogador 1 */}
        <Drawer.Screen
        // nome que aparece no menu
         name="Jogador 1" 
        // componente que será aberto
         component={Jogador1} 
         />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
