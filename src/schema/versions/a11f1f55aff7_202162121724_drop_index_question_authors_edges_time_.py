# Code generated by github.com/lolopinto/ent/ent, DO NOT edit.

"""drop index question_authors_edges_time_idx from question_authors_edges
drop question_authors_edges table

Revision ID: a11f1f55aff7
Revises: f70f495349cb
Create Date: 2021-06-21 21:07:24.988829+00:00

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'a11f1f55aff7'
down_revision = 'f70f495349cb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('question_authors_edges_time_idx',
                  table_name='question_authors_edges')
    op.drop_table('question_authors_edges')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
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
    # ### end Alembic commands ###
