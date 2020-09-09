import React, {useState, useEffect} from 'react';
import {Form, Input, Radio, Select, Col, } from 'antd';
import {getDuration, getPrice, calculation} from './utils.js'
import moment from 'moment';
import './Form.css';

function FormOrder() {

    const [textLength, setTextLength] = useState(0) 
    const [price, setPrice] = useState(0) 
    const [durationMinutes, setDurationMinutes] = useState(0) 
    const [languageText, setLanguageText] = useState('')
    const [email, setEmail] = useState('')
    const [typeText, setTypeText] = useState('text')
    const [disabledButton, setDisabledButton] = useState(true)
    const [finalDate, setFinalDate] = useState('')
    const [finalTime, setFinalTime] = useState('')

    const typeTextArray = [
        {title: 'Текст', value: 'text'},
        {title: 'Файл .doc', value: 'doc'},
        {title: 'Файл .docx', value: 'docx'},
        {title: 'Файл .rtf',  value: 'rtf'},
        {title: 'Файл .pdf',  value: 'pdf'},
        {title: 'Інший тип файлу', value: 'else'},
    ]

    useEffect(() => {
        if (languageText && textLength && email) {
            setDisabledButton(false)
        }else{
            setDisabledButton(true)
        }
    }, [languageText, textLength, email]);

    useEffect(() => {
        setPrice(getPrice(languageText, textLength, typeText))
        setDurationMinutes(getDuration(languageText, textLength, typeText))
    }, [languageText, textLength, typeText]);

    useEffect(() => {
        if(durationMinutes){
            const deadline = calculation(moment(), durationMinutes)
            setFinalDate(deadline.format('DD.MM.YY'))
            setFinalTime(deadline.format('HH:mm'))
            
        }
    }, [durationMinutes]);

    const onChangeText =(e) => {
        setTextLength(e.target.value.length)
    }

    const onChangeLang =(e) => {
        setLanguageText(e.target.value)
    }

    const onChangeType =(value) => {
        setTypeText(value)
    }
    
    const onSubmit =() => {
        console.log('Submit')
    }

    const onChangeEmail =(e) => {
        setEmail(e.target.value)
    }
    

    return (
        <Form
            className="make-order"
        >
            <Col className="make-order-item">
                <section className="section">
                    <div className="section-item">
                        <h3 className="section-title">ЗАМОВИТИ РЕДАГУВАННЯ</h3>
                        <p className="section-p">
                            <span>Виправимо всі помилки, приберемо всі дурниці, перефразуємо невдалі місця, 
                                але сильно текст не переписуватимемо. Зайвих виправлень не буде.</span>
                            <a href="/">
                                Детальніше про редагування
                            </a>
                        </p>
                        <Form.Item className="fields-row">
                            <Input required className="common-input" type="email" placeholder="Ваша эл. почта" onChange={onChangeEmail}></Input>
                        </Form.Item>
                        <Form.Item className="fields-row">
                            <Input className="common-input" placeholder="Ваше имя"></Input>
                        </Form.Item>
                        <Form.Item className="area">
                            <textarea  className="area-text" placeholder="Уведіть текст" onChange={onChangeText}></textarea>
                            <div className="area-symbols">{textLength}</div>
                        </Form.Item>
                    </div>
                </section>
                <section className="section-mt-40">
                    <div className="section-item">
                        <div className="section-radio-select">
                            <Form.Item className="section-radio-btn">
                                <h3 className="section-title-13">МОВА</h3>
                                <Radio.Group name="radio-group" onChange={onChangeLang}>
                                    <Radio className="radio" value='uk'>Українська</Radio>
                                    <Radio className="radio" value='ru'>Російська</Radio>
                                    <Radio className="radio" value='eng'>Англійська</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item className="section-select">
                                <Select defaultValue="text" className="select" onChange={onChangeType}>
                                    {typeTextArray.map(t => 
                                        <Select.Option key={t.value} value={t.value}>{t.title}</Select.Option>
                                    )}
                                </Select>
                            </Form.Item>
                        </div>
                    </div>
                </section>
                <section className="section-mt-40">
                    <div className="section-item">
                        <Form.Item className="form-comment">
                            <Input className="common-input" placeholder="Стислий коментар або покликання"></Input>
                        </Form.Item>
                    </div>
                </section>
            </Col>
            <Col className="make-order-item">
                <div className="submit">
                    <div className="submit-content">
                        <div className="content-prise">
                            <div className="number">{price.toFixed(2)} грн</div>
                            <div className="time"> 
                                {durationMinutes ? `Термін виконання: ${finalDate} о ${finalTime}`: null}
                            </div>
                        </div>
                        <div className="button">
                            <button disabled={disabledButton} className="make-order-button" type="submit" onClick={onSubmit}>Замовити</button>
                        </div>
                    </div>
                </div>
            </Col>
        </Form>
    );
  }
  
  export default FormOrder;