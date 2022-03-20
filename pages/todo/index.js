import Todo from '../../components/todo/Todo';

function Index() {
    return (
        <div style={{textAlign:'center'}}>
          <br/>    
          <h1>My Todos</h1>
          <Todo text='Learn React' />
          <Todo text='Master React' />
          <Todo text='Explore the full React course' />
        </div>
      );
}

export default Index