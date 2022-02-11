import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFF',
    },
    navBar:{
        flexDirection: 'row',
        height:60,
        justifyContent: 'space-between'
    },
    contentTitleNavBar:{
        justifyContent: 'center',
        marginLeft:20
    },
    titleNavbar:{
        fontSize:25,
        fontWeight: 'bold',
    },
    contentNavbarPhoto:{
        marginRight:20,
        justifyContent: 'center',
        backgroundColor: '#b1b1b1',
        alignSelf: 'center',
        borderRadius:600,
        width:50,
        height:50,
    },
    img:{
        width:45,
        height:45,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },
    contentSearch:{
        margin:20,
        height:50,
        padding:10,
        marginTop:20,
        borderWidth:1,
        borderColor: '#c1c1c1',
        opacity:0.4,
        borderRadius:4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtSugestion:{
        margin:20,
        fontSize:18,
        fontWeight: 'bold'
    },
    flatList:{
        margin:20
    }
});

export default styles;

