import InputMask from 'comigo-tech-react-input-mask';
import React, { useState } from "react";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import axios from "axios";
import MenuSistema from "../../MenuSistema";

export default function FormEntregador() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [foneCelular, setFoneCelular] = useState('');
    const [foneFixo, setFoneFixo] = useState('');
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState('');
    const [valorFrete, setValorFrete] = useState('');
    const [enderecoRua, setEnderecoRua] = useState('');
    const [enderecoComplemento, setEnderecoComplemento] = useState('');
    const [enderecoNumero, setEnderecoNumero] = useState('');
    const [enderecoBairro, setEnderecoBairro] = useState('');
    const [enderecoCidade, setEnderecoCidade] = useState('');
    const [enderecoCep, setEnderecoCep] = useState('');
    const [enderecoUf, setEnderecoUf] = useState('');
    const [ativo, setAtivo] = useState(true);

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

    function salvar() {
        let entregadorRequest = {
            nome: nome,
            cpf: cpf,
            rg: rg,
            dataNascimento: dataNascimento,
            foneCelular: foneCelular,
            foneFixo: foneFixo,
            qtdEntregasRealizadas: parseInt(qtdEntregasRealizadas),
            valorFrete: parseFloat(valorFrete),
            enderecoRua: enderecoRua,
            enderecoComplemento: enderecoComplemento,
            enderecoNumero: enderecoNumero,
            enderecoBairro: enderecoBairro,
            enderecoCidade: enderecoCidade,
            enderecoCep: enderecoCep,
            enderecoUf: enderecoUf,
            ativo: ativo
        }

        axios.post("http://localhost:8080/api/entregador", entregadorRequest)
            .then((response) => {
                console.log('Entregador cadastrado com sucesso.')
                // Limpar o formulário após salvar
                limparFormulario();
            })
            .catch((error) => {
                console.log('Erro ao incluir o entregador.')
            })
    }

    function limparFormulario() {
        setNome('');
        setCpf('');
        setRg('');
        setDataNascimento('');
        setFoneCelular('');
        setFoneFixo('');
        setQtdEntregasRealizadas('');
        setValorFrete('');
        setEnderecoRua('');
        setEnderecoComplemento('');
        setEnderecoNumero('');
        setEnderecoBairro('');
        setEnderecoCidade('');
        setEnderecoCep('');
        setEnderecoUf('');
        setAtivo(true);
    }

    function voltar() {
        // Lógica para voltar
        console.log('Voltar');
    }

    const handleAtivoChange = (e, { value }) => {
        setAtivo(value === 'sim');
    };

    return (
        <div>

            <MenuSistema tela={'entregador'} />

            <div style={{marginTop: '3%'}}>
                <Container textAlign='justified' >
                    <h2>
                        <span style={{color: 'darkgray'}}>
                            Entregador &nbsp;
                            <Icon name='angle double right' size="small" />
                        </span>
                        Cadastro
                    </h2>

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
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    placeholder="Digite o nome completo"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'
                                >
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={cpf}
                                        onChange={(e) => setCpf(e.target.value)}
                                        placeholder="000.000.000-00"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG'
                                >
                                    <InputMask
                                        mask="99.999.999-9"
                                        value={rg}
                                        onChange={(e) => setRg(e.target.value)}
                                        placeholder="00.000.000-0"
                                    />
                                </Form.Input>
                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={6}
                                    placeholder="Ex: 20/03/1985"
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        value={dataNascimento}
                                        onChange={(e) => setDataNascimento(e.target.value)}
                                        placeholder="Ex: 20/03/1985"
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Fone Celular'
                                    width={6}
                                >
                                    <InputMask
                                        mask="(99) 99999-9999"
                                        value={foneCelular}
                                        onChange={(e) => setFoneCelular(e.target.value)}
                                        placeholder="(00) 00000-0000"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}
                                >
                                    <InputMask
                                        mask="(99) 9999-9999"
                                        value={foneFixo}
                                        onChange={(e) => setFoneFixo(e.target.value)}
                                        placeholder="(00) 0000-0000"
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='QTD Entregas Realizadas'
                                    width={6}
                                    value={qtdEntregasRealizadas}
                                    onChange={(e) => setQtdEntregasRealizadas(e.target.value)}
                                    placeholder="0"
                                >
                                    <InputMask
                                        mask="999999"
                                        maskChar={null}
                                        value={qtdEntregasRealizadas}
                                        onChange={(e) => setQtdEntregasRealizadas(e.target.value)}
                                        placeholder="0"
                                    />
                                </Form.Input>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Por Frete'
                                    width={6}
                                >
                                    <InputMask
                                        mask="R$ 999.99"
                                        maskChar={null}
                                        value={valorFrete}
                                        onChange={(e) => setValorFrete(e.target.value)}
                                        placeholder="R$ 0,00"
                                    />
                                </Form.Input>
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Rua'
                                    maxLength="100"
                                    width={12}
                                    value={enderecoRua}
                                    onChange={(e) => setEnderecoRua(e.target.value)}
                                    placeholder="Digite o nome da rua"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Número'
                                    width={4}
                                    value={enderecoNumero}
                                    onChange={(e) => setEnderecoNumero(e.target.value)}
                                    placeholder="Nº"
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    required
                                    fluid
                                    label='Bairro'
                                    maxLength="100"
                                    width={6}
                                    value={enderecoBairro}
                                    onChange={(e) => setEnderecoBairro(e.target.value)}
                                    placeholder="Digite o bairro"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Cidade'
                                    width={6}
                                    value={enderecoCidade}
                                    onChange={(e) => setEnderecoCidade(e.target.value)}
                                    placeholder="Digite a cidade"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CEP'
                                    width={4}
                                >
                                    <InputMask
                                        mask="99999-999"
                                        value={enderecoCep}
                                        onChange={(e) => setEnderecoCep(e.target.value)}
                                        placeholder="00000-000"
                                    />
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
                                    value={enderecoUf}
                                    onChange={(e, { value }) => setEnderecoUf(value)}
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Complemento'
                                    maxLength="100"
                                    width={16}
                                    value={enderecoComplemento}
                                    onChange={(e) => setEnderecoComplemento(e.target.value)}
                                    placeholder="Digite o complemento (opcional)"
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
                                        checked={ativo === true}
                                        onChange={handleAtivoChange}
                                    />
                                    <Form.Radio
                                        label='Não'
                                        value='nao'
                                        checked={ativo === false}
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
                                onClick={voltar}
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>

                            <Button
                                type="submit"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={salvar}
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