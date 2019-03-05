# PGF

# How to install and start
In general go here: https://facebook.github.io/react-native/docs/getting-started.html

1. Install chocolatey by using cmd.exe as admin.
2. Run the following commands:
  choco install -y nodejs.install python2 jdk8
  npm install -g react-native-cli
3. Install Android Studio and add in the SDK Manager under Android 9 the "Android SDK Platform 28" and preferably all entries that have to do with Intel/Google system images, though you only need Intel x86 Atom_64 and Google APIs Intel x86 Atom images. Doing them all means less compatability problems, hopefully.
4. Add this variable name to the user/system variables:
  Name: ANDROID_HOME
  Value: C:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk
5. Add platform-tools to Path, same location as above + \platform-tools. Remember to add ; before and after.
6. In the root directory, run:
  npm run android
