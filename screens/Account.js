import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { container } from '../constant'
import FastImage from 'react-native-fast-image'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function Account() {
  return (
    <SafeAreaView style={styles.container} edges={['right', 'left', 'top']}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Profile Section */}
        <View style={styles.profileSection}>
            {/* <View style={styles.profileImage}> */}
              <FastImage
                  //style={{ width: 60, height: 60, borderRadius:50 }}
                  style={styles.profileImage}
                  source={require('../assets/profilePicture/profile1.jpeg')}
              />
            {/* </View> */}

            <View>
              <Text style={styles.username}>Firdaus Fazil</Text>
              <Text style={styles.email}>firdausfazil94@gmail.com</Text>
            </View>
        </View>


        {/* Banner Section */}
        <View style={styles.banner}>
          <Text style={styles.bannerTextHeader}>Promotion Banner Placeholder</Text>
          <Text style={styles.bannerText}>Example : upgrade membership</Text>
        </View>


        {/* Menu Section */}
        <View style={styles.accMenuSection}>
        <View style={styles.accSubMenuSection}>
            <Text style={styles.accMenuHeader}>Account</Text>

            {/* Profile */}
            <View style={styles.accMenu}>
              <Text style={{marginRight:15}}>
                <AntDesign name='user' style={{color:'grey', fontSize:30}} />
              </Text>
              <Text style={{color:'grey', fontSize:20, width:'79%'}}>Profile </Text>
              <Text>
                <AntDesign name='right' style={{color:'grey', fontSize:20}} />
              </Text>
            </View>

            {/* Password */}
            <View style={styles.accMenu}>
              <Text style={{marginRight:15}}>
                <AntDesign name='lock1' style={{color:'grey', fontSize:30}} />
              </Text>
              <Text style={{color:'grey', fontSize:20, width:'79%'}}>Password </Text>
              <Text>
                <AntDesign name='right' style={{color:'grey', fontSize:20}} />
              </Text>
            </View>

            {/* Address */}
            <View style={styles.accMenu}>
              <Text style={{marginRight:15}}>
                <AntDesign name='enviromento' style={{color:'grey', fontSize:30}} />
              </Text>
              <Text style={{color:'grey', fontSize:20, width:'79%'}}>Address </Text>
              <Text>
                <AntDesign name='right' style={{color:'grey', fontSize:20}} />
              </Text>
            </View>

            {/* Notification */}
            <View style={styles.accMenu}>
              <Text style={{marginRight:15}}>
                <AntDesign name='bells' style={{color:'grey', fontSize:30}} />
              </Text>
              <Text style={{color:'grey', fontSize:20, width:'79%'}}>Notification </Text>
              <Text>
                <AntDesign name='right' style={{color:'grey', fontSize:20}} />
              </Text>
            </View>
          </View>


          <View style={styles.accSubMenuSection}>
            <Text style={styles.accMenuHeader}>More</Text>

            {/* Profile */}
            <View style={styles.accMenu}>
              <Text style={{marginRight:15}}>
                <AntDesign name='staro' style={{color:'grey', fontSize:30}} />
              </Text>
              <Text style={{color:'grey', fontSize:20, width:'79%'}}>Term & Condition </Text>
              <Text>
                <AntDesign name='right' style={{color:'grey', fontSize:20}} />
              </Text>
            </View>

            {/* Password */}
            <View style={styles.accMenu}>
              <Text style={{marginRight:15}}>
                <AntDesign name='infocirlceo' style={{color:'grey', fontSize:30}} />
              </Text>
              <Text style={{color:'grey', fontSize:20, width:'79%'}}>About </Text>
              <Text>
                <AntDesign name='right' style={{color:'grey', fontSize:20}} />
              </Text>
            </View>

            {/* Address */}
            <View style={styles.accMenu}>
              <Text style={{marginRight:15}}>
                <AntDesign name='questioncircleo' style={{color:'grey', fontSize:30}} />
              </Text>
              <Text style={{color:'grey', fontSize:20, width:'79%'}}>Help </Text>
              <Text>
                <AntDesign name='right' style={{color:'grey', fontSize:20}} />
              </Text>
            </View>
          </View>
        </View>


        <View style={styles.logout}>
          <Text style={{fontSize:20, color:'#F47231', fontWeight:'500'}}>Log Out</Text>
        </View>


      </ScrollView>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container:{
    //flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  profileSection:{
    width:container.width*0.95,
    height:container.height*0.1,
    paddingHorizontal:15,
    //justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginBottom:20,
    marginTop:10
    //backgroundColor:'blue'
  },
  profileImage:{
    //backgroundColor:'white',
    width:65,
    height:65,
    borderRadius:50,
    //borderWidth:1,
    //borderColor:'black',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 0.1, //android
    marginRight:20
  },
  username:{
    fontWeight:'bold',
    fontSize:25
  },
  email:{

  },
  banner:{
    width:container.width*0.90,
    backgroundColor:'black',
    height:container.height*0.13,
    borderRadius:20,
    alignSelf:'center',
    justifyContent:'center',
    paddingHorizontal:20,
    marginBottom:35
  },
  bannerTextHeader:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
    marginBottom:5
  },
  bannerText:{
    color:'white',
    fontSize:14
  },
  accMenuSection:{
    width:container.width*0.90,
    //height:container.height*0.8,
    alignSelf:'center',
  },
  accSubMenuSection:{
    marginBottom:20
  },
  accMenuHeader:{
    fontWeight:'bold',
    fontSize:25,
    marginBottom:15
  },
  accMenu:{
    width:'98%',
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    marginBottom:15
  },
  logout:{
    alignSelf:'center',
    marginTop:10,
    marginBottom:30
  }

})