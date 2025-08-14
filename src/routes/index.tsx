import { NavigationContainer } from '@react-navigation/native';
import { RoutesPublics } from './routes.publics';
import { RoutesPrivadas } from './routes.privates';
import { useAuth } from '../hooks/useAuth';

export function Routes() {
  const { tokenState, } = useAuth();
  const logado = !!tokenState;
  return (
    <NavigationContainer>
      {
        logado ? <RoutesPrivadas /> : <RoutesPublics />
      }
    </NavigationContainer>
  );
}