import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import TextAnimator from './TextAnimator';
import Modal from 'react-native-modal';

import IconFace1 from 'react-native-vector-icons/Entypo';
import IconTwitter from 'react-native-vector-icons/Entypo';
import IconApple1 from 'react-native-vector-icons/Ionicons';
import IconGoogle from 'react-native-vector-icons/FontAwesome';
import IconEye from 'react-native-vector-icons/Entypo';
import IconeFace2 from 'react-native-vector-icons/MaterialCommunityIcons';
import IconeApple2 from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;

const Main = () => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }
  function openModal2() {
    setModal2(true);
  }
  function closeModal2() {
    setModal2(false);
  }

  return (
    <>
      <ImageBackground
        style={styles.containerMain}
        source={require('../assets/fundo.jpg')}
      />
      <View style={styles.generalMain}>
        <View style={styles.logoMain}>
          <Image source={require('../assets/logo.png')} />
          <Text style={styles.headerMain}>TV TIME</Text>
        </View>
        <View>
          <TextAnimator
            content="Acompanhe seus filmes e séries"
            textStyle={styles.animationTextStyle}
            style={styles.animationContainerStyle}
            duration={2000}
          />
        </View>

        <View style={styles.containerButtonComecar}>
          <TouchableOpacity onPress={openModal2}>
            <View style={styles.buttonComecar}>
              <Text style={styles.textButtonComecar}>COMEÇAR</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.footerMain}>
          <Text style={styles.footertextMain}>Tem uma conta?</Text>
          <TouchableOpacity onPress={openModal}>
            <Text style={{color: 'white'}}>
              <B> FAZER LOGIN</B>
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <KeyboardAvoidingView>
        <Modal
          animationIn="slideInRight"
          animationOut="slideOutDown"
          onBackdropPress={closeModal2}
          onSwipeComplete={closeModal2}
          swipeDirection="right"
          isVisible={modal2}
          style={styles.modalComecar}>
          <LinearGradient
            colors={['transparent', 'black']}
            start={{x: 0.5, y: 0.5}}>
            <View style={{marginTop: '125%'}}>
              <TouchableOpacity style={styles.modal2ButtonFace}>
                <IconeFace2
                  color="white"
                  name="facebook"
                  style={styles.iconeFace2}
                  size={20}
                />
                <Text
                  style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                  Cadastrar-se com o Facebook
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modal2ButtonApple}>
                <IconeApple2
                  color="black"
                  name="apple"
                  style={styles.iconeApple2}
                  size={20}
                />
                <Text
                  style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
                  Cadastrar-se com a Apple
                </Text>
              </TouchableOpacity>
              <Text
                style={{color: 'white', marginTop: 30, alignSelf: 'center'}}>
                ________
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: '#FFE800',
                  marginTop: 30,
                  alignSelf: 'center',
                  fontWeight: 'bold',
                }}>
                VER MAIS OPÇÕES
              </Text>
              <Text
                style={{
                  color: 'white',
                  marginTop: 30,
                  alignSelf: 'center',
                  fontSize: 10,
                  textAlign: 'center',
                }}>
                Ao se cadastrar, você concorda com nossos <B>Termos</B> e nossa{' '}
                <B>Política de Privacidade</B>
              </Text>
            </View>
          </LinearGradient>
        </Modal>
      </KeyboardAvoidingView>

      <KeyboardAvoidingView>
        <Modal
          animationIn="slideInUp"
          animationOut="slideOutDown"
          onBackdropPress={closeModal}
          onSwipeComplete={closeModal}
          swipeDirection="right"
          isVisible={modal}
          style={styles.modalFazerLogin}>
          <View style={styles.containerModal}>
            <View>
              <IconApple1
                name="logo-apple"
                color="white"
                size={50}
                style={{marginRight: 20}}
              />
            </View>
            <View>
              <IconGoogle
                name="google-plus-circle"
                color="red"
                size={50}
                style={{marginRight: 20}}
              />
            </View>
            <View>
              <IconFace1
                name="facebook-with-circle"
                color="#4A18D4"
                size={50}
                style={{marginRight: 20}}
              />
            </View>
            <View>
              <IconTwitter
                name="twitter-with-circle"
                color="#18AED4"
                size={50}
                style={{marginRight: 20}}
              />
            </View>
          </View>

          <View style={{height: 100}}>
            <Text style={{color: 'white'}}>
              _________________________ ou ________________________
            </Text>
          </View>

          <TextInput
            placeholder="Nome de usuário ou e-mail"
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
            selectionColor="black"
            style={styles.inputNomeModal}
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
            style={styles.inputSenhaModal}
          />

          <View style={{marginBottom: 15}}>
            <IconEye
              name="eye-with-line"
              color="#FFD500"
              size={20}
              style={{alignSelf: 'flex-end', marginBottom: 5}}
            />
            <Text style={{color: 'yellow', alignSelf: 'flex-end'}}>
              Esqueceu a senha?
            </Text>
          </View>

          <TouchableOpacity style={styles.buttonFazerLoginModal}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              FAZER LOGIN
            </Text>
          </TouchableOpacity>
        </Modal>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },

  generalMain: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    height: '100%',
  },

  logoMain: {
    marginLeft: '30%',
    flexDirection: 'row',
    marginTop: 20,
  },

  headerMain: {
    marginLeft: 3,
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },

  animationTextStyle: {
    fontSize: 21,
    color: 'white',
    fontWeight: 'bold',
  },

  animationContainerStyle: {
    marginTop: '70%',
    alignItems: 'center',
  },

  containerButtonComecar: {
    marginLeft: '32%',
    marginTop: '70%',
  },

  buttonComecar: {
    backgroundColor: '#FFD500',
    borderRadius: 30,
    paddingBottom: 15,
    paddingTop: 15,
    marginBottom: 15,
    width: 150,
  },

  textButtonComecar: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },

  footerMain: {
    marginTop: 5,
    alignSelf: 'center',
    flexDirection: 'row',
  },

  footertextMain: {
    color: 'white',
    textAlign: 'center',
  },

  modalComecar: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  modal2ButtonFace: {
    backgroundColor: '#4267B2',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    flexDirection: 'row',
  },

  iconeFace2: {
    backgroundColor: '#4267B2',
    marginRight: 5,
    marginLeft: 5,
  },

  modal2ButtonApple: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    marginTop: 30,
  },

  iconeApple2: {
    backgroundColor: 'white',
    marginRight: 5,
    marginLeft: 5,
  },

  modalFazerLogin: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },

  containerModal: {
    height: 100,
    width: null,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputNomeModal: {
    borderRadius: 5,
    width: '100%',
    height: 40,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'rgba(255, 255, 255, 0.6)',
  },

  inputSenhaModal: {
    color: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 5,
    width: '100%',
    height: 40,
    padding: 5,
  },

  buttonFazerLoginModal: {
    backgroundColor: '#FFD500',
    borderRadius: 20,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
});

export default Main;
