import { useNavigation, useRoute } from "@react-navigation/native"
import { useEffect } from "react"
import { TouchableOpacity } from "react-native"
import MainContainer from "../../shared/components/MainContainer"

const Menu1 = () => {
    const naviigation = useNavigation()
    const route = useRoute()

    useEffect(() => {
      if (route.params?.message) {
        console.log('Mneu1', route.params.message);
      }
    }, [route.params])
    
  return (
    <MainContainer>
        <TouchableOpacity>
            
        </TouchableOpacity>
    </MainContainer>
  )
}

export default Menu1