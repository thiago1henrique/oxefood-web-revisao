import InputMask from 'comigo-tech-react-input-mask';
import React, { useState } from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormEntregador () {
    const [ativo, setAtivo] = useState('sim');

    const estadosBrasileiros = [
        { value: 'AC', text: 'Acre' },
        { value: 'AL', text: 'Alagoas' },
        { value: 'AP', text: 'Amapá' },
        { value: 'AM', text: 'Amazonas' },
        { value: 'BA', text: 'Bahia' },
        { value: 'CE', text: 'Ceará' },
        { value: 'DF', text: 'Distrito Federal' },
        { value: 'ES', text: 'Espírito Santo' },
        { value: 'GO', text: 'Goiás' },
        { value: 'MA', text: 'Maranhão' },
        { value: 'MT', text: 'Mato Grosso' },
        { value: 'MS', text: 'Mato Grosso do Sul' },
        { value: 'MG', text: 'Minas Gerais' },
        { value: 'PA', text: 'Pará' },
        { value: 'PB', text: 'Paraíba' },
        { value: 'PR', text: 'Paraná' },
        { value: 'PE', text: 'Pernambuco' },
        { value: 'PI', text: 'Piauí' },
        { value: 'RJ', text: 'Rio de Janeiro' },
        { value: 'RN', text: 'Rio Grande do Norte' },
        { value: 'RS', text: 'Rio Grande do Sul' },
        { value: 'RO', text: 'Rondônia' },
        { value: 'RR', text: 'Roraima' },
        { value: 'SC', text: 'Santa Catarina' },
        { value: 'SP', text: 'São Paulo' },
        { value: 'SE', text: 'Sergipe' },
        { value: 'TO', text: 'Tocantins' }
    ];

    const handleAtivoChange = (e, { value }) => {
        setAtivo(value);
    };

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    width={8}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG'>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={6}
                                    placeholder={"Ex:20/03/1985"}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    width={6}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Fixo'
                                    width={6}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    width={6}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Por Frete'
                                    width={6}
                                />

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Rua'
                                    maxLength="100"
                                    width={12}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Número'
                                    width={4}
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Bairro'
                                    maxLength="100"
                                    width={6}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Cidade'
                                    width={6}
                                >
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='CEP'
                                    width={4}
                                >
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Select
                                    required
                                    fluid
                                    label='UF'
                                    options={estadosBrasileiros}
                                    placeholder='Selecione o estado'
                                    width={16}
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Complemento'
                                    maxLength="100"
                                    width={16}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Field>
                                    <label>Ativo:</label>
                                </Form.Field>
                                <Form.Group>
                                    <Form.Radio
                                        label='Sim'
                                        value='sim'
                                        checked={ativo === 'sim'}
                                        onChange={handleAtivoChange}
                                    />
                                    <Form.Radio
                                        label='Não'
                                        value='nao'
                                        checked={ativo === 'nao'}
                                        onChange={handleAtivoChange}
                                        style={{marginLeft: '20px'}}
                                    />
                                </Form.Group>
                            </Form.Group>

                        </Form>

                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}