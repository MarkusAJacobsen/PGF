# PGF

# How to install and start (Windows)
In general go here: https://facebook.github.io/react-native/docs/getting-started.html

1. Install chocolatey by using cmd.exe as admin.
      @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
2. Run the following commands:

  choco install -y nodejs.install python2 jdk8
  
  npm install -g react-native-cli
  
3. Install Android Studio and add in the SDK Manager under Android 9 the "Android SDK Platform 28" and preferably all entries that have to do with Intel/Google system images, though you only need Intel x86 Atom_64 and Google APIs Intel x86 Atom images. Doing them all means less compatability problems, hopefully.
4. Add this variable name to the user/system variables:

  Name: ANDROID_HOME
  
  Value: C:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk
  
5. Add platform-tools to Path, same location as above + \platform-tools. Remember to add ; before and after.
6. In the root directory, run: (note: it may fail, if it does re-connect the device)

  npm install

  npm run android

# How to connect to PGC from PGF locally

To connect to PGC locally, you need to first install the Docker toolbox. This will install the Oracle VM VirtualBox Manager and Docker on your machine. 

First open the Docker Quickstart Terminal. Navigate to the folder with PGC, and run the .sh file. Once the images are running, stop the images with ctrl+c or equivalent.

Open VirtualBox, and you should have a VM already set up called "default". Go to "Settings", "Network", "Adapter 1", open advanced and finally "Port Forwarding". In the port forwarding, add a rule for TCP for host IP 127.0.0.1, with both ports set to 5555. You can also add 7474, 7687 and 6113 to connect the other parts of PG* backend for access.

To connect PGF to localhost, you need to run adb reverse tcp:5555 tcp:5555.

# Extra tools: 
## Warning: you must set %ANROID_HOME%\platform-tools path first before use this tool.
Run Android emulator from desktop: 
Copy bat file from tools\ to desktop, and in bat file change <emulator_name> to your emulator's name for example: Nexus_5_API_Q, that's how you can run emulator from desktop. (Ctrl + M for open menu)

# TODO
1. Add dynamic nickname.
  - Try parse to App.js from async, but get only objects/Promise. (fail), left static text.
2. For test create data in local storage.
3. Create items list in "Growing Guides".
4. Create search in "What can I grow? (categorys).
5. Create search in "My Garden".
6. Create add/remove function for items.
7. Refactor style to stylesheet.
8. Refactor code
9. Refactor design for tablets/phones.
10. Fix on iOS.