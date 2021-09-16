import gql from "graphql-tag";
import { graphql } from "react-apollo";

//query para la consula
const TASK_LIST_QUERY = gql`
  query TASK_LIST {
    tasksList(orderBy: createdAt_DESC) {
      items {
        id
        _description
        state
      }
    }
  }
`;

//buscamos todas los items
const withTask = graphql(TASK_LIST_QUERY, {
  props: ({ data: { tasksList } }) => {
    let tasks = [];
    if (tasksList) {
      tasks = tasksList.items;
    }
    return {
      tasks,
    };
  },
});

//query para la consula
const CREATE_TASK_MUTATION = gql`
  mutation TaskCreate($data: TaskCreateInput!) {
    taskCreate(data: $data) {
      id
      task
      state
    }
  }
`;

//creamos un nuevo item
const withCreateTask = graphql(CREATE_TASK_MUTATION, {
  props: ({ mutate }) => ({
    createTask: ({ task }) => {
      mutate({
        variables: { data: { task, state: false } },
        refetchQueries: [{ query: TASK_LIST_QUERY }],
      });
    },
  }),
});

//query para la consula

const TOGGLE_TASK_MUTATION = gql`
  mutation TaskToggle($id: ID!, $state: Boolean!) {
    taskUpdate(filter: { id: $id }, data: { state: $state }) {
      id
      _description
      state
    }
  }
`;

//cambiamos el estado del item
const withToggleTask = graphql(TOGGLE_TASK_MUTATION, {
  props: ({ mutate }) => ({
    toggleTask: ({ id, state }) => {
      mutate({
        variables: { id, state },
        refetchQueries: [{ query: TASK_LIST_QUERY }],
      });
    },
  }),
});

//query para la consula

const UPDATE_TASK_MUTATION = gql`
  mutation TaskToggle($id: ID!, $task: String!) {
    taskUpdate(filter: { id: $id }, data: { task: $task }) {
      id
      task
      state
    }
  }
`;

//Actualizamos el item
const withUpdateTask = graphql(UPDATE_TASK_MUTATION, {
  props: ({ mutate }) => ({
    updateTask: ({ id, task }) => {
      mutate({
        variables: { id, task },
        refetchQueries: [{ query: TASK_LIST_QUERY }],
      });
    },
  }),
});

//query para la consula

const DELETE_TASK_MUTATION = gql`
  mutation TodoDelete($id: ID!) {
    taskDelete(filter: { id: $id }) {
      success
    }
  }
`;

//Eleminamos el item
const withRemoveTask = graphql(DELETE_TASK_MUTATION, {
  props: ({ mutate }) => ({
    removeTask: (id) => {
      mutate({
        variables: { id },
        refetchQueries: [{ query: TASK_LIST_QUERY }],
      });
    },
  }),
});

export {
  withRemoveTask,
  withToggleTask,
  withCreateTask,
  withTask,
  withUpdateTask,
};
