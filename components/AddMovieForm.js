import { TextInput, View } from "react-native";

export default function AddMovieForm(){

    const [values, setValues] = useState({
        title: "",
        overview: "",
        release_date:"",
        genres: []
    })
    return(
        <View>
            <TextInput placeholder="Enter movie title"
            onChangeText={}/>
            

        </View>
    )
}