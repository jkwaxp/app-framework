<!-- To keep state of form element (and work with them) you have to assign v-model attributes -->

<template>
  <f7-page>
    <f7-navbar title="Form Handling" back-link="Back" sliding></f7-navbar>
    <f7-block inner inset>
      <p style="text-align: center">Enter some data, close and reopen this app - and see how all forms on this page have kept their data - and the scroll position and the form focus as well.</p>
    </f7-block>
    <f7-block-title>Form</f7-block-title>
    <f7-list form id="form-form1">
      <f7-list-item>
        <f7-label>Name</f7-label>
        <f7-input name="name" type="text" placeholder="Name"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Password</f7-label>
        <f7-input type="password" name="password" placeholder="Password"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>E-mail</f7-label>
        <f7-input name="email" type="email" placeholder="E-mail"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>URL</f7-label>
        <f7-input name="url" type="url" placeholder="URL"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Phone</f7-label>
        <f7-input name="phone" type="tel" placeholder="Phone"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Birth date</f7-label>
        <f7-input name="birthday" type="date" placeholder="Birth date"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Date time</f7-label>
        <f7-input name="date" type="datetime-local"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Gender</f7-label>
        <f7-input name="gender" type="select">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Switch</f7-label>
        <f7-input name="switchbox" type="switch"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Range</f7-label>
        <f7-input name="range" type="range" min="0" max="100" step="1"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label>Textarea</f7-label>
        <f7-input name="text" type="textarea" placeholder="Textarea"></f7-input>
      </f7-list-item>
    </f7-list>

    <f7-block-title>Form With Floating Labels</f7-block-title>
    <f7-list form id="form-2" store-data>
      <f7-list-item>
        <f7-label floating>Name</f7-label>
        <f7-input name="name2" type="text" placeholder="Name"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label floating>Password</f7-label>
        <f7-input type="password" name="password2" placeholder="Password"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-label floating>E-mail</f7-label>
        <f7-input name="email2" type="email" placeholder="E-mail"></f7-input>
      </f7-list-item>
    </f7-list>

    <f7-block-title>Form Without Labels</f7-block-title>
    <f7-list form id="form-3" store-data>
      <f7-list-item>
        <f7-input name="name3" type="text" placeholder="Name"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-input type="password" name="password3" placeholder="Password"></f7-input>
      </f7-list-item>
      <f7-list-item>
        <f7-input name="email3" type="email" placeholder="E-mail"></f7-input>
      </f7-list-item>
    </f7-list>

    <f7-block-title>Buttons</f7-block-title>
    <f7-block inner>
      <p><f7-button>Button</f7-button></p>
      <p><f7-button round>Button Round</f7-button></p>
      <p><f7-button fill>Button Fill</f7-button></p>
      <p>
        <f7-buttons>
          <f7-button round active>Button 1</f7-button>
          <f7-button round>Button 2</f7-button>
          <f7-button round>Button 3</f7-button>
        </f7-buttons>
      </p>
      <p>
        <f7-buttons color="orange">
          <f7-button round big>Button 1</f7-button>
          <f7-button round big active>Button 2</f7-button>
          <f7-button round big>Button 3</f7-button>
        </f7-buttons>
      </p>
      <p>
        <f7-grid>
          <f7-col><f7-button big fill color="green">Send</f7-button></f7-col>
          <f7-col><f7-button big fill color="red">Delete</f7-button></f7-col>
        </f7-grid>
      </p>
      <p>
        <f7-grid>
          <f7-col><f7-button fill raised color="green">Raised</f7-button></f7-col>
          <f7-col><f7-button raised color="red">Raised</f7-button></f7-col>
          <f7-col><f7-button fill raised color="pink">Raised</f7-button></f7-col>
        </f7-grid>
      </p>
    </f7-block>
  </f7-page>
</template>

<script>
  module.exports = {}
</script>
