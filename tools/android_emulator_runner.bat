if not DEFINED IS_MINIMIZED set IS_MINIMIZED=1 && start "" /min "%~dpnx0" %* && exit
    %ANDROID_HOME%\emulator\emulator -avd <emulator_name> -gpu off
exit