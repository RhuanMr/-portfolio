# Portifolio of Rhuan Marques

## Dependencies

- [git](https://git-scm.com/)
- [yarn](https://yarnpkg.com/)
- [react-native-cli](https://reactnative.dev/docs/0.8/getting-started)
- [Android Studio](https://developer.android.com/studio)

Recommend to use [tutorial](https://react-native.rocketseat.dev/) to configurate your environment.

## communs mistakes


É necessário instalar o Android Studio de maneira customizada, utilizando o caminho ```JAVA_HOME```. Verifique se as variáveis ambiente estão devidamente configuradas no``` ~/.bashrc``` ou ```~/.zshrc```:	You neeed to install Android Studio with costumized configuration , using the path ```JAVA_HOME```. Check if the enverimont varibles are properly configurate in ``` ~/.bashrc``` or in ```~/.zshrc```:
```	```
export JAVA_HOME=ENDEREÇO_DE_INSTALAÇÃO_DO_JDK	export JAVA_HOME=ENDEREÇO_DE_INSTALAÇÃO_DO_JDK
export ANDROID_HOME=~/Android/Sdk	export ANDROID_HOME=~/Android/Sdk
@@ -30,25 +30,25 @@ export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin	export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools	export PATH=$PATH:$ANDROID_HOME/platform-tools
```	```
Existe um [erro](https://github.com/facebook/react-native/issues/23306) de Gradlew que pode ser resolvido no Linux com:	Exist a [error](https://github.com/facebook/react-native/issues/23306) of Gradlew that be possible to resolve in Linux with:
```	```
chmod 755 android/gradlew	chmod 755 android/gradlew
```	```


## Inicialização	## Inicialization
Clone o repositório	Clone the repository
```	```
git clone https://github.com/fga-eps-mds/2020.1-Conecta-Ensina-Mobile.git	git clone https://github.com/fga-eps-mds/2020.1-Conecta-Ensina-Mobile.git
```	```
Instale as dependências	Intall the the
```	```
yarn install	yarn install
```	```
Inicie a aplicação	Inicie a aplicação
```	```
yarn start	yarn start
```	```
Emule a aplicação com o Android Studio	Emulation the aplication with AndroidStudio 
```	```
yarn android	yarn android
```	```
0 comments on commit 274a602
