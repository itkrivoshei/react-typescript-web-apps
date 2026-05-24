import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, TextField, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

import { RootState } from '../../redux/store';
import {
  Project,
  setActiveProject,
  deleteProject,
  editProject,
} from '../../redux/slices/toDoSlice';

const ProjectList: React.FC = () => {
  const [isEditing, setIsEditing] = useState<number | string | null>(null);
  const [newName, setNewName] = useState<string>('');

  const projects = useSelector((state: RootState) => state.todo.projects) || [];
  const activeProjectId = useSelector(
    (state: RootState) => state.todo.activeProject
  );
  const dispatch = useDispatch();

  const handleProjectClick = (projectId: number | string) => {
    dispatch(setActiveProject(projectId));
  };

  const handleProjectDelete = (projectId: number | string) => {
    dispatch(deleteProject(projectId));
  };

  const handleEditClick = (projectId: number | string, currentName: string) => {
    setIsEditing(projectId);
    setNewName(currentName);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handleSaveClick = (projectId: number | string) => {
    const trimmedName = newName.trim();

    if (trimmedName) {
      dispatch(editProject({ projectId, newName: trimmedName }));
      setIsEditing(null);
      setNewName('');
    }
  };

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
    >
      {projects.map((project: Project) => (
        <Paper
          key={project.id}
          sx={{
            display: 'flex',
            wordBreak: 'break-word',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor:
              project.id === activeProjectId ? '#957fef' : '#c8b6ff',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor:
                project.id === activeProjectId ? '#b0a6db' : '#a096cb',
            },
          }}
          onClick={() => handleProjectClick(project.id)}
        >
          {isEditing === project.id ? (
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <TextField
                fullWidth
                value={newName}
                onChange={handleNameChange}
                size='small'
                onClick={(event) => event.stopPropagation()}
              />
              <IconButton
                onClick={(event) => {
                  event.stopPropagation();
                  handleSaveClick(project.id);
                }}
                aria-label='Save project name'
              >
                <SaveIcon />
              </IconButton>
            </Box>
          ) : (
            <Typography
              variant='body1'
              sx={{ flexGrow: 1, textAlign: 'center' }}
            >
              {project.title}
            </Typography>
          )}
          {!isEditing && (
            <Box sx={{ ml: 'auto' }}>
              <IconButton
                onClick={(event) => {
                  event.stopPropagation();
                  handleEditClick(project.id, project.title);
                }}
                aria-label={`Edit ${project.title}`}
              >
                <EditIcon />
              </IconButton>
              {project.id !== 'default' && (
                <IconButton
                  onClick={(event) => {
                    event.stopPropagation();
                    handleProjectDelete(project.id);
                  }}
                  aria-label={`Delete ${project.title}`}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </Box>
          )}
        </Paper>
      ))}
    </Box>
  );
};

export default ProjectList;
