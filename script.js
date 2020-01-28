class Aviso extends React.Component {
constructor(props){
    super(props)

            this.state = {
                msg : [1],
                status: 1

            }
    }
        render(){
            return (
                <div>
               {this.state.msg.length >0 &&
                  <h1>Você tem {this.state.msg.length} mensagens não lidas</h1>
               }

               {this.state.msg.length == 0 &&
               <h1>Você leu todas as mensagens</h1>}

                
                {this.state.status == 1 ? 'usuario logado' : 'usuario não logado' }
               
               </div>
            )           
        }
}


class Status extends React.Component {
constructor(props){
super(props)

        this.state = {

            status: 1

        }

        this.ativar = this.ativar.bind(this)
        this.desativar = this.desativar.bind(this)


    }

   ativar(){
        this.setState({status: 1})
   }
    
   desativar(){
        this.setState({status: 0})
   }

    render(){

        let statusBtn;
        let statusMsg;

        
        if(this.state.status == 1){
            statusMsg = "Usuario Logado",
            statusBtn =  <button onClick = {this.desativar} >Logout</button>
        }else{
            statusMsg = "Usuario não Logado",
            statusBtn =  <button onClick = {this.ativar} >Sing In</button>
        }


        return (
            <div>

            <p>{statusMsg}</p>
            {statusBtn}
            </div>
        )
    }
}










let elemento = (
    <div>
        <Aviso />
        <Status />
    </div>
)



ReactDOM.render(
    elemento,
    document.getElementById('app')
)