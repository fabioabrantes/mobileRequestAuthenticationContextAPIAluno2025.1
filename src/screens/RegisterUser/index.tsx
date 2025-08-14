import { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import { z } from 'zod';

import { useTheme } from 'styled-components';

import { useNavigation } from '@react-navigation/native';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schemaValidationRegisterClient } from '../../utils/validations';

import { api } from '../../api';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ErrorInput } from '../../components/ErrorInput';

import {
  Container,
  Header,
  UserContainer,
  User,
  UserGreeting,
  LogoutButton,
  Icon,
  HeaderSubtitle,
  Title,
  Form,
  Footer,
} from './styles';



type FormData = {
  name: string;
  username: string;
  cpf: string;
  password: string;
  latitude: string;
  longitude: string;
};

interface User {
  id: number;
  name: string;
}

export function RegisterUser() {
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(schemaValidationRegisterClient)
  });

  const navigation = useNavigation();
  const theme = useTheme();




  function goToPageLogin() {
    navigation.navigate('Login');
  }

  async function handleRegisterUser({ cpf, name, username, password, latitude, longitude }: FormData) {

    const data = {
      name,
      cpf,
      username,
      password,
      latitude,
      longitude
    }
    console.log(data)
    const response = await api.post('users', data);
    setIsLoading(false);
    console.log(response.data);
    navigation.navigate('Login');

  }


  return (
    <Container>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="position" enabled>
            <Header>
              <UserContainer>
                <User>
                  <UserGreeting>Tela de Cadastro</UserGreeting>
                </User>

                <LogoutButton onPress={goToPageLogin}>
                  <Icon name="arrow-left" color={theme.colors.background_primary} />
                </LogoutButton>
              </UserContainer>
            </Header>

            <HeaderSubtitle>
              <Title>
                Faça seu Cadastro no sistema.
              </Title>
            </HeaderSubtitle>

            <Form >
              <Controller
                name='name'
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    iconName="edit"
                    onChangeText={onChange}
                    value={value}
                    placeholder="Nome"
                    autoCorrect={false}/* não fica corrigindo palavras */
                    autoCapitalize="none" /* não fica induzindo a colocar a primeira letra maiúscula */
                  />
                )}
              />

              {
                !!formState.errors.name && <ErrorInput description={formState.errors.name.message} />
              }
              <Controller
                name='username'
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    iconName="edit"
                    onChangeText={onChange}
                    value={value}
                    placeholder="email"
                    keyboardType="email-address"
                    autoCorrect={false}/* não fica corrigindo palavras */
                    autoCapitalize="none" /* não fica induzindo a colocar a primeira letra maiúscula */
                  />
                )}
              />
              {
                !!formState.errors.username && <ErrorInput description={formState.errors.username.message} />
              }
              <Controller
                name='cpf'
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    iconName="edit"
                    onChangeText={onChange}
                    value={value}
                    placeholder="cpf"
                  />
                )}
              />
              {
                !!formState.errors.cpf && <ErrorInput description={formState.errors.cpf.message} />
              }
              <Controller
                name='password'
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    iconName="lock"
                    onChangeText={onChange}
                    value={value}
                    placeholder="password"
                  />
                )}
              />
              {
                !!formState.errors.password && <ErrorInput description={formState.errors.password.message} />
              }
              <Controller
                name='longitude'
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    iconName="edit"
                    onChangeText={onChange}
                    value={value}
                    placeholder="longitude"
                  />
                )}
              />
              {
                !!formState.errors.longitude && <ErrorInput description={formState.errors.longitude.message} />
              }
              <Controller
                name='latitude'
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    iconName="edit"
                    onChangeText={onChange}
                    value={value}
                    placeholder="latitude"
                  />
                )}
              />
              {
                !!formState.errors.latitude && <ErrorInput description={formState.errors.latitude.message} />
              }
            </Form>

            <Footer>
              <Button
                title="Cadastrar"
                onPress={handleSubmit(handleRegisterUser)}
                loading={isLoading}
              />
            </Footer>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </Container>
  );
}