-----------------------------------------------------------------------------
-- # CRIAÇÃO DAS TABELAS EM BANCO MYSQL
-----------------------------------------------------------------------------

CREATE TABLE DE_ALUNO (
    ID INT,
    NOME VARCHAR(100),
    CONSTRAINT DE_ALUNO_PK PRIMARY KEY (ID)
);

CREATE TABLE DE_RESPONSAVEL (
    ID INT,
    NOME VARCHAR(100),
    CONSTRAINT DE_RESPONSAVEL_PK PRIMARY KEY (ID)
);

CREATE TABLE DE_PARENTESCO (
    ID_ALUNO INT,
    ID_RESPONSAVEL INT,
    PARENTESCO VARCHAR(100),
    CONSTRAINT DE_PARENTESCO_PK PRIMARY KEY (ID_ALUNO, ID_RESPONSAVEL),
    CONSTRAINT ALUNO_TO_PARENTESCO_FK FOREIGN KEY (ID_ALUNO) REFERENCES DE_ALUNO (ID),
    CONSTRAINT RESPONSAVEL_TO_PARENTESCO_FK FOREIGN KEY (ID_RESPONSAVEL) REFERENCES DE_RESPONSAVEL (ID)
);

-----------------------------------------------------------------------------
-- # EXERCÍCIOS

-- 1. a) Pablo é Pai de Lucas
-----------------------------------------------------------------------------

INSERT INTO DE_ALUNO (
    ID,
    NOME
) VALUES (
    1,
    'Lucas'
);

INSERT INTO DE_RESPONSAVEL (
    ID,
    NOME
) VALUES (
    1,
    'Pablo'
);

INSERT INTO DE_PARENTESCO (
    ID_ALUNO,
    ID_RESPONSAVEL,
    PARENTESCO
) VALUES (
    (SELECT ID FROM DE_ALUNO WHERE NOME = 'Lucas'),
    (SELECT ID FROM DE_RESPONSAVEL WHERE NOME = 'Pablo'),
    'Pai'
);

-----------------------------------------------------------------------------
-- 1. b) Brenda é Mãe de Lucas
-----------------------------------------------------------------------------

INSERT INTO DE_RESPONSAVEL (
    ID,
    NOME
) VALUES (
    2,
    'Brenda'
);

INSERT INTO DE_PARENTESCO (
    ID_ALUNO,
    ID_RESPONSAVEL,
    PARENTESCO
) VALUES (
    (SELECT ID FROM DE_ALUNO WHERE NOME = 'Lucas'),
    (SELECT ID FROM DE_RESPONSAVEL WHERE NOME = 'Brenda'),
    'Mãe'
);

-----------------------------------------------------------------------------
-- 2) Escreva uma consulta SQL para retornar dados únicos conforme tabela
-- abaixo. Caso o aluno tenha mais de dois responsáveis, traga apenas os 
-- dois primeiros responsáveis encontrados na tabela.
-----------------------------------------------------------------------------

SELECT
    ALU.NOME,
    (
        SELECT
            RESP.NOME
        FROM
            DE_RESPONSAVEL RESP
            INNER JOIN DE_PARENTESCO PAR
            ON PAR.ID_RESPONSAVEL = RESP.ID
        WHERE
            PAR.ID_ALUNO = ALU.ID
        LIMIT 0, 1
    ) AS RESPONSÁVEL_1,
    (
        SELECT
            PAR.PARENTESCO
        FROM
            DE_PARENTESCO PAR
        WHERE
            PAR.ID_ALUNO = ALU.ID
        LIMIT 0, 1
    ) AS PARENTESCO_1,
    (
        SELECT
            RESP.NOME
        FROM
            DE_RESPONSAVEL RESP
            INNER JOIN DE_PARENTESCO PAR
            ON PAR.ID_RESPONSAVEL = RESP.ID
        WHERE
            PAR.ID_ALUNO = ALU.ID
        LIMIT 1, 1
    ) AS RESPONSÁVEL_2,
    (
        SELECT
            PAR.PARENTESCO
        FROM
            DE_PARENTESCO PAR
        WHERE
            PAR.ID_ALUNO = ALU.ID
        LIMIT 1, 1
    ) AS PARENTESCO_2
FROM
    DE_ALUNO ALU
ORDER BY
    ALU.NOME ASC;

-----------------------------------------------------------------------------
-- # BÔNUS

-- 1) Escreva uma consulta SQL para trazer todos os dados. Seja criativo.
-----------------------------------------------------------------------------

SELECT
    ALU.NOME       AS ALUNO,
    RESP.NOME      AS RESPONSÁVEL,
    PAR.PARENTESCO AS PARENTESCO
FROM
    DE_ALUNO       ALU
    LEFT JOIN DE_PARENTESCO PAR
    ON PAR.ID_ALUNO = ALU.ID
    LEFT JOIN DE_RESPONSAVEL RESP
    ON RESP.ID = PAR.ID_RESPONSAVEL
ORDER BY
    ALU.NOME ASC;
