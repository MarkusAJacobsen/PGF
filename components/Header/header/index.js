onHamburgerClick(){
    this.props.toggleDrawer();
}

// help from:  https://medium.com/@shreyaskumar/hamburger-menu-from-scratch-in-a-react-native-app-using-react-native-drawer-9411a9df4d23
// TODO put title in this {this.props.title}
render(){
    return(
        <View style={styles.viewStyle}>
            <View>
                <TouchableOpacity onPress={ this.onHamburgerClick}>
                    <Image
                        style={styles.menuStyle}
                        source={assets.menu}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.welcome}>Velkommen til din Gartner i Lomma!</Text>
            <Text syle={styles.textStyle}>LommeGartner'n</Text>  
            <View>
                <Image
                    style={styles.profilStyle}
                    source={assets.profil}
                    />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    profilStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    textStyle: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    menuStyle: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  