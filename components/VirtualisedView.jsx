import { FlatList } from 'react-native'
import React from 'react'

const VirtualisedView = (props) => {
  return (
    <FlatList
        data={[]}
        ListEmptyComponent={null}
        keyExtractor={()=> "dummy"}
        renderItem={null}
        ListHeaderComponent={()=>(
            <React.Fragment>{props.children}</React.Fragment>
        )}
    />
  )
}

export default VirtualisedView

