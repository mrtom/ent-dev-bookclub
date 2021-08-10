# Code generated by github.com/lolopinto/ent/ent, DO NOT edit.

"""drop index user_authored_questions_edges_time_idx from user_authored_questions_edges
drop user_authored_questions_edges table
drop assoc_edge_config table
drop index question_authors_edges_time_idx from question_authors_edges
drop question_authors_edges table
drop column user_id

Revision ID: 831b8363711c
Revises: 97cc069cbe6f
Create Date: 2021-06-21 21:01:51.693348+00:00

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '831b8363711c'
down_revision = '97cc069cbe6f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('user_authored_questions_edges_time_idx',
                  table_name='user_authored_questions_edges')
    op.drop_table('user_authored_questions_edges')
    op.drop_table('assoc_edge_config')
    op.drop_index('question_authors_edges_time_idx',
                  table_name='question_authors_edges')
    op.drop_table('question_authors_edges')
    op.drop_column('questions', 'user_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('questions', sa.Column(
        'user_id', postgresql.UUID(), autoincrement=False, nullable=False))
    op.create_table('question_authors_edges',
                    sa.Column('id1', postgresql.UUID(),
                              autoincrement=False, nullable=False),
                    sa.Column('id1_type', sa.TEXT(),
                              autoincrement=False, nullable=False),
                    sa.Column('edge_type', postgresql.UUID(),
                              autoincrement=False, nullable=False),
                    sa.Column('id2', postgresql.UUID(),
                              autoincrement=False, nullable=False),
                    sa.Column('id2_type', sa.TEXT(),
                              autoincrement=False, nullable=False),
                    sa.Column('time', postgresql.TIMESTAMP(),
                              autoincrement=False, nullable=False),
                    sa.Column('data', sa.TEXT(),
                              autoincrement=False, nullable=True),
                    sa.PrimaryKeyConstraint(
                        'id1', 'edge_type', 'id2', name='question_authors_edges_id1_edge_type_id2_pkey')
                    )
    op.create_index('question_authors_edges_time_idx',
                    'question_authors_edges', ['time'], unique=False)
    op.create_table('assoc_edge_config',
                    sa.Column('edge_type', postgresql.UUID(),
                              autoincrement=False, nullable=False),
                    sa.Column('edge_name', sa.TEXT(),
                              autoincrement=False, nullable=False),
                    sa.Column('symmetric_edge', sa.BOOLEAN(), server_default=sa.text(
                        'false'), autoincrement=False, nullable=False),
                    sa.Column('inverse_edge_type', postgresql.UUID(),
                              autoincrement=False, nullable=True),
                    sa.Column('edge_table', sa.TEXT(),
                              autoincrement=False, nullable=False),
                    sa.Column('created_at', postgresql.TIMESTAMP(),
                              autoincrement=False, nullable=False),
                    sa.Column('updated_at', postgresql.TIMESTAMP(),
                              autoincrement=False, nullable=False),
                    sa.ForeignKeyConstraint(['inverse_edge_type'], ['assoc_edge_config.edge_type'],
                                            name='assoc_edge_config_inverse_edge_type_fkey', ondelete='RESTRICT'),
                    sa.PrimaryKeyConstraint(
                        'edge_type', name='assoc_edge_config_edge_type_pkey'),
                    sa.UniqueConstraint(
                        'edge_name', name='assoc_edge_config_unique_edge_name')
                    )
    op.create_table('user_authored_questions_edges',
                    sa.Column('id1', postgresql.UUID(),
                              autoincrement=False, nullable=False),
                    sa.Column('id1_type', sa.TEXT(),
                              autoincrement=False, nullable=False),
                    sa.Column('edge_type', postgresql.UUID(),
                              autoincrement=False, nullable=False),
                    sa.Column('id2', postgresql.UUID(),
                              autoincrement=False, nullable=False),
                    sa.Column('id2_type', sa.TEXT(),
                              autoincrement=False, nullable=False),
                    sa.Column('time', postgresql.TIMESTAMP(),
                              autoincrement=False, nullable=False),
                    sa.Column('data', sa.TEXT(),
                              autoincrement=False, nullable=True),
                    sa.PrimaryKeyConstraint(
                        'id1', 'edge_type', 'id2', name='user_authored_questions_edges_id1_edge_type_id2_pkey')
                    )
    op.create_index('user_authored_questions_edges_time_idx',
                    'user_authored_questions_edges', ['time'], unique=False)
    # ### end Alembic commands ###
