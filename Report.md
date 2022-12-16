# Meta-relazione per Ingegneria dei Sistemi Web

# Analisi

In questo capitolo andrà fatta l'analisi dei requisiti e quella del
problema, ossia verranno elencate le cose che l'applicazione dovrà fare
(requisiti) e verrà descritto il dominio applicativo (analisi del
problema). In fase di analisi, è molto importante tenere a mente che non
vi deve essere alcun riferimento al design né tantomeno alle tecnologie
implementative, ovvero, non si deve indicare come il software sarà
internamente realizzato. La fase di analisi, infatti, *precede*
qualunque azione di design o di implementazione.

## Requisiti

Nell'analisi dei *requisiti* dell'applicazione si dovrà spiegare cosa
l'applicazione dovrà fare. Non ci si deve concentrare sui particolari
problemi, ma esclusivamente su cosa si desidera che l'applicazione
faccia. Al termine della lettura della sezione, il docente deve avere
un'idea molto chiara di cosa l'applicazione sia.

### Elementi positivi

-   Si fornisce una descrizione in linguaggio naturale di ciò che il
    software dovrà fare.
-   Gli obiettivi sono spiegati con chiarezza, per punti.
-   Se vi sono termini il cui significato non è immediatamente
    intuibile, essi vengono spiegati.
-   Considerato a un paio di pagine un limite ragionevole alla lunghezza
    della parte sui requisiti, in quello spazio si deve cercare di
    chiarire *tutti* gli aspetti dell'applicazione, non lasciando
    decisioni che impattano la parte "esterna" alla discussione del
    design (che dovrebbe solo occuparsi della parte "interna").

### Elementi negativi

-   Si forniscono indicazioni circa le soluzioni che si vogliono
    adottare.
-   Si forniscono dettagli di tipo tecnico o implementativo (parlando di
    classi, linguaggi di programmazione, librerie, eccetera).

# Analisi

Il software "Prenotiamo!" è commissionato da un aggregato di aziende nella stessa palazzina, si pone l'obbiettivo di informatizzare il processo di prenotazione pranzo per i rispettivi dipendenti.
Al momento, per ogni azienda, c'è un dipendente che si prende in carico la raccolta delle prenotazioni dagli altri colleghi. Questo processo è un enorme spreco di tempo per il dipendente "ordinante", che deve scrivere o chiamare ciascun collega per raccogliere la rispettiva preferenza.
La mensa è unica e si trova al piano terra dello stabile. La lista degli ordini che arriva in cucina, è composta dalle prenotazione di tutti i dipendenti delle aziende. La convenzione in essere con la mensa, permette ai dipendenti di scegliere una sola portata dal menu.
L'applicazione verrà resa disponibile anche alla mensa, così da ottimizzare i tempi in cucina e rendere i tempi di attesa in sala più corti.

## Requisiti

#### Requisiti funzionali
- La mensa dovrà essere in grado di agginungere nuove portare al menù.
- Gli utenti del sistema possono scegliere dal menù una portata.
- L'utente "ordinante" dovrà essere in grado di chiudere la lista degli ordini. Quando si chiude la lista, 
  l'applicazione invia una mail alla mensa, con l'elenco degli ordini.
- L'utente "ordinante" dovrà essere in grado di effettuare ordine a nome di altri utenti, i quali magari sono impegnati in altre attività.
- Deve essere fornito un sistema di registrazione e di login ai dipendenti
#### Requisiti non funzionali

-   Gli utenti potranno modificare il proprio ordine.
-   Viene inviata una notifica agli utenti loggati nel sistema quando l'ordine viene chiuso, chi non aveva ancora inviato l'ordine, dovrà provvedere a chiamare la   mensa per l'aggiunta manuale del suo piatto.
-  Gli utenti possono vedere lo storico dei loro ordini passati.



## Analisi e modello del dominio

"Prenotiamo!" dovrà interagire con diverse entità: con gli utenti Generici,
con la Mensa, con gli utenti Ordinanti.
La mensa caricherà i piatti nel menù, "Prenotiamo!" deve stamparlo agli utenti.
Gli ordini degli utenti vengono salvati in una lista, gli utenti ordinanti saranno gli unici
a poter inviare tale lista alla cucina.
Nel form di registrazione, i nuovi utenti dovranno selezionare a quale azienda afferiscono.
L'associazione utente -> azienda viene riportata alla mensa che riceve l'ordine, così da preparare il numero di coperti in sala.
Dato il monte ore concordato, probabilmente alcuni requisiti non funzionali  richiesti dal committente, verranno sviluppati in future versioni del prodotto.

Gli elementi costitutivi del problema sono sintetizzati nella seguente figura.

<pre><code>```mermaid
classDiagram
    Prenotiamo <|-- Ristorante
    Prenotiamo <|-- Utente Generico
    Prenotiamo <|-- Utente Ordinante
    Prenotiamo : -Login e Registrazione
    Prenotiamo : -Invia mail con lista ordini
    Prenotiamo : -Render menù

    class Ristorante{
        -Inserisce nuovi piatti nel menù
    }
    class Utente Generico{
        +Afferisce ad un'azienda
        -Sceglie Piatto e, eventualmente, aggiunge note
    }
    class Utente Ordinante{
        +Afferisce ad un'azienda
        -Effettua invio della lista giornaliera
        -Effettua ordini a nome di altri utenti
    }
```</code></pre>

La difficoltà primaria sarà quella di riuscire ad assegnare diversi privilegi (Utente Generico, Utente Ordinante, Ristorante)
partendo da un set comune di utenti.

Il requisito non funzionale riguardante le notifiche push quando si effettua l'invio dell'ordine alla mensa richiede studi 
che non potranno essere effettuati all'interno del monte ore previsto: tale feature sarà oggetto
di futuri lavori.

# Design

In questo capitolo si spiegano le strategie messe in campo per
soddisfare i requisiti identificati nell'analisi.

Si parte da una visione architetturale, il cui scopo è informare il
lettore di quale sia il funzionamento dell'applicativo realizzato ad
alto livello. In particolare, è necessario descrivere accuratamente in
che modo i componenti principali del sistema si coordinano fra loro. A
seguire, si dettagliano alcune parti del design, quelle maggiormente
rilevanti al fine di chiarificare la logica con cui sono stati
affrontati i principali aspetti dell'applicazione.



## Architettura

Il software sarà realizzato con il metaframework Nuxt (v3).
Sia backend che frontend utilizzeranno Nuxt.
Lo stile verrà implementato con bootstrap. Si seguirà un approccio Mobile-first nelle fasi del suo sviluppo.
La UI verrà disegnata con Balsamiq e sottoposta a feedback del cliente.
I dati dell'applicazione verranno ospitati su un database MySql in cloud.
Avendo il database in cloud, il backend non avrà mai problemi nel reperire i dati dal DB.
Lo schema logico è disponibile nella repository del progetto.


## Design dettagliato

In questa sezione si possono approfondire alcuni elementi del design con
maggior dettaglio. Mentre ci attendiamo principalmente (o solo)
interfacce negli schemi UML delle sezioni precedenti, in questa sezione
è necessario scendere in maggior dettaglio presentando la struttura di
alcune sottoparti rilevanti dell'applicazione. È molto importante che,
descrivendo la soluzione ad un problema, quando possibile si mostri che
non si è re-inventata la ruota ma si è applicato un design pattern noto.
Che si sia utilizzato (o riconosciuto) o meno un pattern noto, è
comunque bene definire qual è il problema che si è affrontato, qual è la
soluzione messa in campo, e quali motivazioni l'hanno spinta. È
assolutamente inutile, ed è anzi controproducente, descrivere
classe-per-classe (o peggio ancora metodo-per-metodo) com'è fatto il
vostro software: è un livello di dettaglio proprio della documentazione
dell'API (deducibile dalla Javadoc).

**È necessario che ciascun membro del gruppo abbia una propria sezione
di design dettagliato, di cui sarà il solo responsabile**.

Ciascun
autore dovrà spiegare in modo corretto e giustamente approfondito (non
troppo in dettaglio, non superficialmente) il proprio contributo. È
importante focalizzarsi sulle scelte che hanno un impatto positivo sul
riuso, sull'estensibilità, e sulla chiarezza dell'applicazione.
Esattamente come nessun ingegnere meccanico presenta un solo foglio con
l'intero progetto di una vettura di Formula 1, ma molteplici fogli di
progetto che mostrano a livelli di dettaglio differenti le varie parti
della vettura e le modalità di connessione fra le parti, così ci
aspettiamo che voi, futuri ingegneri informatici, ci presentiate prima
una visione globale del progetto, e via via siate in grado di
dettagliare le singole parti, scartando i componenti che non interessano
quella in esame. Per continuare il parallelo con la vettura di Formula
1, se nei fogli di progetto che mostrano il design delle sospensioni
anteriori appaiono pezzi che appartengono al volante o al turbo, c'è una
chiara indicazione di qualche problema di design.

Si divida la sezione in sottosezioni, e per ogni aspetto di design che
si vuole approfondire, si presenti:

1.  : una breve descrizione in linguaggio naturale del problema che si
    vuole risolvere, se necessario ci si può aiutare con schemi o
    immagini;
2.  : una descrizione della soluzione proposta, analizzando eventuali
    alternative che sono state prese in considerazione, e che descriva
    pro e contro della scelta fatta;
3.  : uno schema UML che aiuti a comprendere la soluzione sopra
    descritta;
4.  : se la soluzione è stata realizzata utilizzando uno o più pattern
    noti, si spieghi come questi sono reificati nel progetto (ad
    esempio: nel caso di Template Method, qual è il metodo template; nel
    caso di Strategy, quale interfaccia del progetto rappresenta la
    strategia, e quali sono le sue implementazioni; nel caso di
    Decorator, qual è la classe astratta che fa da Decorator e quali
    sono le sue implementazioni concrete; eccetera);

La presenza di pattern di progettazione *correttamente utilizzati* è
valutata molto positivamente. L'uso inappropriato è invece valutato
negativamente: a tal proposito, si raccomanda di porre particolare
attenzione all'abuso di Singleton, che, se usato in modo inappropriato,
è di fatto un anti-pattern.

### Elementi positivi

-   Ogni membro del gruppo discute le proprie decisioni di
    progettazione, ed in particolare le azioni volte ad anticipare
    possibili cambiamenti futuri (ad esempio l'aggiunta di una nuova
    funzionalità, o il miglioramento di una esistente).
-   Si mostrano le principali interazioni fra le varie componenti che
    collaborano alla soluzione di un determinato problema.
-   Si identificano, utilizzano *appropriatamente*, e descrivono diversi
    design pattern.
-   Ogni membro del gruppo identifica i pattern utilizzati nella sua
    sottoparte.
-   Si mostrano gli aspetti di design più rilevanti dell'applicazione,
    mettendo in luce la maniera in cui si è costruita la soluzione ai
    problemi descritti nell'analisi.
-   Si tralasciano aspetti strettamente implementativi e quelli non
    rilevanti, non mostrandoli negli schemi UML (ad esempio, campi
    privati) e non descrivendoli.
-   Ciascun elemento di design identificato presenta una piccola
    descrizione del problema calato nell'applicazione, uno schema UML
    che ne mostra la concretizzazione nelle classi del progetto, ed una
    breve descrizione della motivazione per cui tale soluzione è stata
    scelta, specialmente se è stato utilizzato un pattern noto. Ad
    esempio, se si dichiara di aver usato Observer, è necessario
    specificare chi sia l'observable e chi l'observer; se si usa
    Template Method, è necessario indicare quale sia il metodo template;
    se si usa Strategy, è necessario identificare l'interfaccia che
    rappresenta la strategia; e via dicendo.

### Elementi negativi

-   Il design del modello risulta scorrelato dal problema descritto in
    analisi.
-   Si tratta in modo prolisso, classe per classe, il software
    realizzato, o comunque si riduce la sezione ad un mero elenco di
    quanto fatto.
-   Non si presentano schemi UML esemplificativi.
-   Non si individuano design pattern, o si individuano in modo errato
    (si spaccia per design pattern qualcosa che non lo è).
-   Si utilizzano design pattern in modo inopportuno.
-   Si producono schemi UML caotici e difficili da leggere, che
    comprendono inutili elementi di dettaglio.
-   Si presentano schemi UML con classi (nel senso UML del termine) che
    "galleggiano" nello schema, non connesse, ossia senza relazioni con
    il resto degli elementi inseriti.
-   Si tratta in modo inutilmente prolisso la divisione in package,
    elencando ad esempio le classi una per una.

### Esempio minimale (e quindi parziale) di sezione di progetto con UML ben realizzati

#### Personalità intercambiabili



##### Problema



##### Soluzione



# Sviluppo

## Testing automatizzato

Il testing avviene 

### Elementi positivi

-   Si descrivono molto brevemente i componenti che si è deciso di
    sottoporre a test automatizzato.
-   Si utilizzano suite specifiche (e.g. JUnit) per il testing
    automatico.

### Elementi negativi {#elementi-negativi-4 .unnumbered}

-   Non si realizza alcun test automatico.
-   La non presenza di testing viene aggravata dall'adduzione di
    motivazioni non valide. Ad esempio, si scrive che l'interfaccia
    grafica non è testata automaticamente perché è *impossibile*
    farlo (testare in modo automatico le interfacce grafiche è possibile, si veda, come esempio,
    [TestFX](https://github.com/TestFX/TestFX);
    semplicemente, nel corso non c'è modo e tempo di introdurvi questo
    livello di complessità).
-   Si descrive un testing di tipo manuale in maniera prolissa.
-   Si descrivono test effettuati manualmente che sarebbero potuti
    essere automatizzati, ad esempio scrivendo che si è usata
    l'applicazione manualmente.
-   Si descrivono test non presenti nei sorgenti del progetto.
-   I test, quando eseguiti, falliscono.

## Note di sviluppo

Placeholder

# Commenti finali

Placeholder


# Guida utente

See README.md

