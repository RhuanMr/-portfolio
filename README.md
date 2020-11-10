# Portifolio of Rhuan Marques

## Dependencies
- [git](https://git-scm.com/)
- [yarn](https://yarnpkg.com/)
- [react-native-cli](https://reactnative.dev/docs/0.8/getting-started)
- [Android Studio](https://developer.android.com/studio)

recommend to use [tutorial](https://react-native.rocketseat.dev/) to configurate your environment.

## Communs mistakes

You need to install Android Studio with costumized configuration , using the path ```JAVA_HOME```. Check if the enverimont varibles are properly configurate in ``` ~/.bashrc``` or in ```~/.zshrc```:
```
export JAVA_HOME=ENDEREÇO_DE_INSTALAÇÃO_DO_JDK
export ANDROID_HOME=~/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
Exist a [error](https://github.com/facebook/react-native/issues/23306) of Gradlew that be possible to resolve in Linux with:
```
chmod 755 android/gradlew
```

## Inicialization
Clone the repository
```
https://github.com/RhuanMr/-portfolio.git
```
Intall the the
```
yarn install
```
Inicie a aplicação
```
yarn start
```
Emulation the aplication with AndroidStudio 
```
yarn android
