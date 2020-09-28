import React, { FormEvent, useState } from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import './styles.css';

import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherForm(){
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems ] = useState ([
    {
      week_day: 0,
      from: '',
      to: ''
    }
  ])

  function addNewScheduleItem(){
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: ''
      }
    ]);
  }

  function handleCreateClass(e: FormEvent){

    e.preventDefault();

    api.post('classes',{
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(()=>{
      alert('Cadastro realizado com sucesso')
    }).catch(()=>{
      alert('erro ao cadastrar');
    })

  }

  function setScheduleItemValue(position: number, field: string, value: string){
    const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if(index === position){
        return { ...scheduleItem, [field]: value};
      }

      return scheduleItem;
    });

    setScheduleItems(updateScheduleItems);
  }

  return(
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrivel que voce quer dar aulas"
        description="O primeiro passo e preencher esse formulario de inscricao"/>
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>
              Seus dados
            </legend>

            <Input 
              name="name" 
              label="Nome Completo" 
              value={name} 
              onChange={(e) => { setName(e.target.value)} } >
            </Input>
            <Input 
              name="avatar" 
              label="Avatar"
              value={avatar}
              onChange={(e) => { setAvatar(e.target.value)} }
            ></Input>
            <Input 
              name="whatsapp" 
              label="Whatsapp"
              value={whatsapp}
              onChange={(e) => { setWhatsapp(e.target.value)} }>

            </Input>
            <Textarea 
              name="bio" 
              label="Biografia"
              value={bio}
              onChange={(e) => { setBio(e.target.value)} }
            >

            </Textarea>

          </fieldset>

          <fieldset>
            <legend>
              Sobre a aula
            </legend>

            <Select 
              name="subject" 
              label="Materia"
              value={subject}
              onChange={(e) => { setSubject(e.target.value)} }
              options={[
                {value: 'Artes', label: 'Artes'},
                {value: 'Matematica', label: 'Matematica'},
                {value: 'Biologia', label: 'Biologia'},
                {value: 'Ciencias', label: 'Ciencias'},
                {value: 'Portugues', label: 'Portugues'},
                {value: 'Fisica', label: 'Fisica'},
                {value: 'Educacao Fisica', label: 'Educacao Fisica'},
                {value: 'Historia', label: 'Historia'},
              ]}
            ></Select>
            <Input 
              name="cost" 
              label="Custo da sua hora por aula"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              >
            </Input>

          </fieldset>

          <fieldset>
            <legend>
              Horarios disponiveis
              <button onClick={addNewScheduleItem} type="button"> 
              + Novo horario
              </button>
            </legend>
            
            {scheduleItems.map((scheduleItem, item) => {
              return(
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select 
                    name="week_day"  
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={e => setScheduleItemValue(item, 'week_day', e.target.value)}
                    options={[
                      {value: '0', label: 'Domingo'},
                      {value: '1', label: 'Segunda-feira'},
                      {value: '2', label: 'Terca-feira'},
                      {value: '3', label: 'Quarta-feira'},
                      {value: '4', label: 'Quinta-feira'},
                      {value: '5', label: 'Sexta-feira'},
                      {value: '6 Fisica', label: 'Sabado'},
                    ]}
                  ></Select>
                  <Input 
                    name="from" 
                    label="Das" 
                    type="time"
                    value={scheduleItem.from}
                    onChange={e => setScheduleItemValue(item, 'from', e.target.value)}
                    ></Input>
                  <Input 
                    name="to" 
                    label="Ate" 
                    type="time"
                    value={scheduleItem.to}
                    onChange={e => setScheduleItemValue(item, 'to', e.target.value)}
                    ></Input>
                </div>
              )
            })}

          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante"/>
              Importante <br/>
              Preencha todos os dados
            </p>
            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm;