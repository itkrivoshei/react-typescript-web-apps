import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  Project,
  defaultProjectId,
  setActiveProject,
  deleteProject,
  editProject,
} from '../../redux/slices/toDoSlice';

const ProjectList: React.FC = () => {
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [newName, setNewName] = useState('');

  const projects = useAppSelector((state) => state.todo.projects);
  const activeProjectId = useAppSelector((state) => state.todo.activeProject);
  const dispatch = useAppDispatch();

  const handleProjectClick = (projectId: string) => {
    dispatch(setActiveProject(projectId));
  };

  const handleProjectDelete = (projectId: string) => {
    dispatch(deleteProject(projectId));
  };

  const handleEditClick = (projectId: string, currentName: string) => {
    setEditingProjectId(projectId);
    setNewName(currentName);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handleSaveClick = (projectId: string) => {
    const trimmedName = newName.trim();

    if (!trimmedName) return;

    dispatch(editProject({ projectId, newName: trimmedName }));
    setEditingProjectId(null);
    setNewName('');
  };

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, width: '100%' }}
    >
      {projects.map((project: Project) => (
        <Paper
          key={project.id}
          sx={{
            display: 'flex',
            wordBreak: 'break-word',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: 48,
            px: 1,
            borderRadius: 2,
            border: '1px solid rgba(40, 42, 54, 0.12)',
            backgroundColor:
              project.id === activeProjectId
                ? 'rgba(109, 93, 252, 0.62)'
                : 'rgba(200, 182, 255, 0.84)',
            cursor: 'pointer',
            transition: 'background-color 0.15s ease, transform 0.15s ease',
            '&:hover': {
              backgroundColor:
                project.id === activeProjectId
                  ? 'rgba(109, 93, 252, 0.72)'
                  : 'rgba(200, 182, 255, 0.96)',
              transform: 'translateY(-1px)',
            },
          }}
          onClick={() => handleProjectClick(project.id)}
        >
          {editingProjectId === project.id ? (
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                gap: 1,
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
          {!editingProjectId && (
            <Box sx={{ ml: 'auto', display: 'flex' }}>
              <IconButton
                onClick={(event) => {
                  event.stopPropagation();
                  handleEditClick(project.id, project.title);
                }}
                aria-label={`Edit ${project.title}`}
              >
                <EditIcon />
              </IconButton>
              {project.id !== defaultProjectId && (
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

export default React.memo(ProjectList);
