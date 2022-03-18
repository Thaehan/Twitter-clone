import { useState, useEffect, useRef } from 'react';
import { Text, View, TextInput, FlatList } from 'react-native';

function SearchFilter() {
    const initData = useRef()
    const [search, setSearch] = useState('');
    const [result, setResult] = useState(initData.current);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                res.json().then(data => {
                    initData.current = data;
                    setResult(data);
                })
            })
            .catch(error => {
                console.error("error when fetch data")
            })
    }, [])

    useEffect(() => {
        if (search === '') {
            setResult(initData.current);
        } else {
            const filteredArray = initData.current.filter(item => {
                return item.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
            });
            setResult(filteredArray);
        }
    }, [search])

    return (
        <View>
            <TextInput
                value={search}
                onChangeText={setSearch}
            />
            <FlatList
              data={result}
              renderItem={({item}) => 
                <Text>{item.name}</Text>
              }
            />
        </View>
    )
}

export default SearchFilter;