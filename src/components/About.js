import React from 'react'
import { Container } from 'react-bootstrap'
import '../css/about.css'

function About() {
  return (
    <Container className='main-cont'>
      <div className='message-cont-left'>
        <p className='message-left'>Что такое <strong>Summarai?</strong></p>
      </div>
      <div className='message-cont-right'>
        <p className='message-right'><strong>Summarai</strong> - это инструмент, который преобразует ваши онлайн-встречи в конкретные действия. Мы используем передовые технологии искусственного интеллекта для транскрибирования разговоров и выявления ключевых моментов. Отныне каждая встреча становится возможностью для решений и движения вперёд.</p>
      </div>
      <div className='message-cont-left'>
        <p className='message-left'>Какие преимущества у <strong>Summarai</strong>?</p>
      </div>
      <div className='message-cont-right'>
        <p className='message-right'>Забудьте о том, чтобы тратить часы на длительные встречи без результатов. <strong>Summarai</strong> быстро извлекает из них суть, помогая вам сфокусироваться на важном и принять решения быстрее. <br/>
                                    Наш инструмент организует ключевые моменты встречи на канбан-доске, делая их доступными для анализа и дальнейших действий. Теперь вы можете видеть целую картину и принимать информированные решения. <br/>
                                    <strong>Summarai</strong> создан для комфортного использования. Просто загрузите запись вашей встречи, и наш инструмент позаботится об остальном.</p>
      </div>
      <div className='message-cont-left'>
        <p className='message-left'>Я уже хочу попробовать</p>
      </div>
      <div className='message-cont-right'>
        <p className='message-right'>Отныне ваши онлайн-встречи будут не просто словами, а ценными источниками для вашего прогресса. Попробуйте <strong>Summarai</strong> прямо сейчас и убедитесь сами!</p>
      </div>
        
    </Container>
  )
}

export default About